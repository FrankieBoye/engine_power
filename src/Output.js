import React, { Component } from 'react'

class Output extends React.Component {
  render() {
  const {capacity} = this.props;
  const {cylinderOption} = this.props;
  var output = 0

    if(cylinderOption==4){
      output = (((cylinderOption*50))/2 * capacity)
    } else if (cylinderOption==5){
      output = (((cylinderOption*40)-40)/2 * capacity)
    } else if (cylinderOption==6){
      output = (((cylinderOption*36)-40)/2 * capacity)
    } else if (cylinderOption==8){
      output = (((cylinderOption*26)-40)/2 * capacity)
    } else if (cylinderOption==10){
      output = (((cylinderOption*24)-40)/2 * capacity)
    } else {
      output = (((cylinderOption*18)-40)/2 * capacity)
    }
    return (
      <div className="output">
      Output: {output.toFixed(0)} bhp
      </div>
    )
  }
}

export default Output
