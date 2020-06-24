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
    this.handleTurboBoostChange = this.handleTurboBoostChange.bind(this);
    this.chargerBoost = this.chargerBoost.bind(this);
    this.handleDefaultCap = this.handleDefaultCap.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      capacity: "",
      cylinderOption: 0,
      boost: 0,
      superchargerBoost: 0
    }
  }

  handleCapacityChange(capacity){
    this.setState({capacity})
  }

  handleCylinderChange(cylinderOption){
    this.setState({cylinderOption})
  }

  handleTurboBoostChange(boost){
    this.setState({boost})
  }

  reset(boost){
    this.setState({boost})
  }

  chargerBoost(superchargerBoost){
    this.setState({superchargerBoost})
  }

  handleDefaultCap(capacity){
    this.setState({capacity})
  }


  render() {
    return (
      <div className="App">
        <h1>Engine options</h1>
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
        superchargerPressure={this.state.superchargerBoost}
        capacity={this.state.capacity}
        cylinderOption={this.state.cylinderOption}/>
        <br></br>
        <Aspiration
        boostPressure={this.state.boost}
        onTurboBoostChange={this.handleTurboBoostChange}
        resetState={this.reset}
        addTurboBoost={this.handleTurboBoostChange}
        superchargerBoost={this.chargerBoost}
        removeChargerboost={this.chargerBoost}/>
      </div>
    )
  }
}

export default App
