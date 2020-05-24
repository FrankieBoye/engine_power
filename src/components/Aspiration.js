import React, { Component } from 'react'

class Aspiration extends Component {
  constructor(props) {
    super(props);
    this.handleAspChange = this.handleAspChange.bind(this)
    this.reset = this.reset.bind(this)
    this.defaultBoost = this.defaultBoost.bind(this)
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
    this.props.resetState(noBoost)
  }

  defaultBoost() {
    const defaultBoost = 0.5
    this.props.addBoost(defaultBoost)
  }

  render() {
    var{boostPressure} = this.props;

    var boost = <input id="boost" type="range" min="0.5" max="1.5" step="0.1" defaultValue="0.5" onInput={this.onInput.bind(this)}/>

    if(this.state.aspiration === "NA"){
      boost = <input type="range" defaultValue="0" disabled/>
    }

   return (
     <div className="aspiration">
     Select the aspiration:
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
       </label>
       <br></br>
       <br></br>
       <label>
       Boost pressure:
       {boost}
       <br></br>
       <br></br>
       {(boostPressure).toFixed(1)}
       </label>
     </div>
  )
 }
}

export default Aspiration
