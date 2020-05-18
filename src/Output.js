import React, { Component } from 'react'

class Output extends React.Component {
  render() {
  const {capacity} = this.props;
  const {cylinderOption} = this.props;

    if(cylinderOption==4){
      return <h1>{(((cylinderOption*50))/2 * capacity).toFixed(0)} bhp</h1>;
    } else if (cylinderOption==5){
    return <h1>{(((cylinderOption*40)-40)/2 * capacity).toFixed(0)} bhp</h1>;
    } else if (cylinderOption==6){
    return <h1>{(((cylinderOption*36)-40)/2 * capacity).toFixed(0)} bhp</h1>;
    } else if (cylinderOption==8){
    return <h1>{(((cylinderOption*26)-40)/2 * capacity).toFixed(0)} bhp</h1>;
    } else if (cylinderOption==10){
    return <h1>{(((cylinderOption*24)-40)/2 * capacity).toFixed(0)} bhp</h1>;
    } else {
    return <h1>{(((cylinderOption*18)-40)/2 * capacity).toFixed(0)} bhp</h1>;
    }
  }
}

export default Output
