import React, { Component } from 'react'

class Aspiration extends Component {
  constructor(props) {
    super(props);
    this.handleAspChange = this.handleAspChange.bind(this)
    this.reset = this.reset.bind(this)
    this.defaultBoost = this.defaultBoost.bind(this)
    this.superchargerBoost = this.superchargerBoost.bind(this)
    this.state = {
      aspiration: "NA",
    }
  }

  handleAspChange(e) {
    this.setState({
      aspiration: e.target.value
    })
  }

  onInput() {
    var input = document.getElementById("boost");
    var boost = input.value;
    this.props.onBoostChange(parseFloat(boost))
  }

  reset() {
    const noBoost = 0
    const chargerBoost = 0
    this.props.resetState(noBoost)
    this.props.removeChargerboost(chargerBoost)
  }

  defaultBoost() {
    const defaultBoost = 0.5
    const chargerBoost = 0
    this.props.addBoost(defaultBoost);
    this.props.removeChargerboost(chargerBoost)
  }

  superchargerBoost() {
    const boost = 0.9
    const noBoost = 0
    this.props.superchargerBoost(boost);
    this.props.resetState(noBoost)
  }

  render() {
    var{boostPressure} = this.props;

    if(this.state.aspiration === "Turbo"){
      var boost = <input id="boost" type="range" min="0.5" max="1.4" step="0.1" defaultValue="0.5" onInput={this.onInput.bind(this)}/>
    } else {
      boost = <input type="range" defaultValue="0" disabled/>
    }

   return (
     <div className="aspiration">
     Select the aspiration:
     <br></br>
     <br></br>
       <label>
         <input
           type="radio"
           name="asp"
           value="NA"
           checked={this.state.aspiration === "NA"}
           onChange={this.handleAspChange}
           onClick={this.reset}
         />
         NA
       </label>
       <br></br>
       <br></br>
       <label>
         <input
           type="radio"
           name="asp"
           value="Turbo"
           checked={this.state.aspiration === "Turbo"}
           onChange={this.handleAspChange}
           onClick={this.defaultBoost}
         />
         Turbo
         <br></br>
         <label>
         Boost pressure:
         <br></br>
         {boost}
         <br></br>
         {(boostPressure).toFixed(1)}
         </label>

       </label>
       <br></br>
       <br></br>
       <label>
         <input
           type="radio"
           name="asp"
           value="Supercharger"
           onChange={this.handleAspChange}
           onClick={this.superchargerBoost}
         />
         Supercharger
       </label>

     </div>
  )
 }
}

export default Aspiration
