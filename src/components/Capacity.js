import React, { Component } from 'react'

class Capacity extends Component {

  onInput() {
    var input = document.getElementById("capinp");
    var cap = input.value;
    this.props.onCapacityChange(parseFloat(cap))
}

  render() {
  const {capacity} = this.props;
  const {cylinderOption} = this.props;
  let input;

  if(cylinderOption===4){
    input = <input id="capinp" type="range" min="1" max="2.5" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  }else if(cylinderOption===5){
    input = <input id="capinp" type="range" min="2" max="3" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption===6){
    input = <input id="capinp" type="range" min="2.5" max="4" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption===8){
    input = <input id="capinp" type="range" min="3" max="8" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption===10){
    input = <input id="capinp" type="range" min="5" max="8" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption===12){
    input = <input id="capinp" type="range" min="5" max="7" step="0.1" value={capacity} onInput={this.onInput.bind(this)}/>
  } else {
    input = <input type="range" disabled/>
  }

   return (
     <div className="capacity">
     capacity:
     <br></br>
     <br></br>
     {input}
     <br></br>
     <br></br>
     {capacity} litres
     </div>
  )
 }
}

export default Capacity
