import React, { Component } from 'react'
import Cylinders from './components/Cylinders'
import Capacity from './components/Capacity'
import Output from './components/Output'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.handleCylinderChange = this.handleCylinderChange.bind(this);
    this.state = {
      capacity: 2,
      cylinderOption: 0
    }
  }

  handleCapacityChange(capacity){
    this.setState({capacity})
  }

  handleCylinderChange(cylinderOption){
    this.setState({cylinderOption})
  }

  render() {
    return (
      <div className="App">
        <h1>engine options:</h1>
        <Cylinders
        cylinderOption={this.state.cylinderOption}
        onCylinderChange={this.handleCylinderChange}/>
        <br></br>
        <Capacity
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}
        onCapacityChange={this.handleCapacityChange} />
        <br></br>
        <Output
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}/>
      </div>
    )
  }
}

export default App
