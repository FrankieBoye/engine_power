import React, { Component } from 'react'
import Cylinders from './components/Cylinders'
import Capacity from './components/Capacity'
import Output from './components/Output'
import Aspiration from './components/Aspiration'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCapacityChange = this.handleCapacityChange.bind(this);
    this.handleCylinderChange = this.handleCylinderChange.bind(this);
    this.handleBoostChange = this.handleBoostChange.bind(this);
    this.defaultBoost = this.defaultBoost.bind(this)
    this.handleDefaultCap = this.handleDefaultCap.bind(this)
    this.reset = this.reset.bind(this);
    this.state = {
      capacity: 2,
      cylinderOption: 0,
      boost: 0
    }
  }

  handleCapacityChange(capacity){
    this.setState({capacity})
  }

  handleCylinderChange(cylinderOption){
    this.setState({cylinderOption})
  }

  handleBoostChange(boost){
    this.setState({boost})
  }

  reset(boost){
    this.setState({boost})
  }

  defaultBoost(boost){
    this.setState({boost})
  }

  handleDefaultCap(capacity){
    this.setState({capacity})
  }


  render() {
    return (
      <div className="App">
        <h1>engine options:</h1>
        <Cylinders
        cylinderOption={this.state.cylinderOption}
        onCylinderChange={this.handleCylinderChange}
        onDefaultCap={this.handleDefaultCap}/>
        <br></br>
        <Capacity
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}
        onCapacityChange={this.handleCapacityChange} />
        <br></br>
        <Output
        boostPressure={this.state.boost}
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}/>
        <br></br>
        <Aspiration
        boostPressure={this.state.boost}
        onBoostChange={this.handleBoostChange}
        resetState={this.reset}
        addBoost={this.defaultBoost}/>
      </div>
    )
  }
}

export default App
