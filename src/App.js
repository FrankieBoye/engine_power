import React, { Component } from 'react'
import Cylinders from './Cylinders'

class App extends Component {

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
