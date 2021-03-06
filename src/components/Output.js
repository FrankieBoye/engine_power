import React, { Component } from 'react'

class Output extends React.Component {
  render() {
  const {capacity} = this.props;
  const {cylinderOption} = this.props;
  const {boostPressure} = this.props;
  const {superchargerPressure} = this.props;
  var output = 0

    if(cylinderOption===4){
      output = (((cylinderOption*50))/2 * capacity * (1+boostPressure) * (1+superchargerPressure))
    } else if (cylinderOption===5){
      output = (((cylinderOption*40))/2 * capacity * (1+boostPressure*0.4) * (1+superchargerPressure*0.4))
    } else if (cylinderOption===6){
      output = (((cylinderOption*36)-20)/2 * capacity * (1+boostPressure*0.5) * (1+superchargerPressure*0.5))
    } else if (cylinderOption===8){
      output = (((cylinderOption*26)-40)/2 * capacity * (1+boostPressure*0.4) * (1+superchargerPressure*0.4))
    } else if (cylinderOption===10){
      output = (((cylinderOption*24)-40)/2 * capacity * (1+boostPressure*0.3) * (1+superchargerPressure*0.3))
    } else if ((cylinderOption===12)) {
      output = (((cylinderOption*18)-15)/2 * capacity * (1+boostPressure*0.3) * (1+superchargerPressure*0.3))
    } else {
      output = 0
    }

    return (
      <div className="output">
      {output.toFixed(0)} bhp
      </div>
    )
  }
}

export default Output
