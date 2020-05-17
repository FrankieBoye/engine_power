import React, { Component } from 'react'
import Cylinders from './Cylinders'
import Capacity from './Capacity'

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
        <h1>Engine power</h1>
        Select the number of cylinders:
        <br>
        </br>
        <br>
        </br>
        <Cylinders
        cylinderOption={this.state.cylinderOption}
        onCylinderChange={this.handleCylinderChange}/>
        <br>
        </br>
        Enter the capacity:
        <br>
        </br>
        <br>
        </br>
        <Capacity
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}
        onCapacityChange={this.handleCapacityChange} />
      </div>
    )
  }
}

export default App
