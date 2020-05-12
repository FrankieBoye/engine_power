import React, { Component } from 'react';
import Cylinders from './Cylinders'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCylinderChange = this.handleCylinderChange.bind(this)
    this.state = {
      cylinderOption: 0
    };
}

  handleCylinderChange(event){
    this.props.handleCylinderChange(event.target.value)
    // this.setState({cylinderOption: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Engine power</h1>
        Select the number of cylinders:
        <Cylinders/>
      </div>
    )
  }
}

export default App
