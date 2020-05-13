import React, { Component } from 'react'
import Cylinders from './Cylinders'
import Capacity from './Capacity'

class App extends Component {
  render() {
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
        <Capacity/>
      </div>
    )
  }
}

export default App
