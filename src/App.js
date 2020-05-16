import React, { Component } from 'react'
import Cylinders from './Cylinders'
import Capacity from './Capacity'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.state = {
      capacity: 2
    }
  }

  handleCapacityChange(capacity){
    this.setState({capacity})
  }

  render() {
    // const {capacity} = this.state
    return (
      <div className="App">
        <h1>Engine power</h1>
        Select the number of cylinders:
        <br>
        </br>
        <br>
        </br>
        <Cylinders/>
        <br>
        </br>
        Enter the capacity:
        <br>
        </br>
        <br>
        </br>
        <Capacity
        // capacity={capacity}
        capacity={this.state.capacity}
        onCapacityChange={this.handleCapacityChange} />
      </div>
    )
  }
}

export default App
