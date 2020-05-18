import React, { Component } from 'react'

class Capacity extends Component {
  constructor(props) {
    super(props);
  }

  onInput() {
    var input = document.getElementById("capinp");
    var cap = input.value;
    this.props.onCapacityChange(parseFloat(cap))
}

  render() {
  const {capacity} = this.props;
  const {cylinderOption} = this.props;
  let input;

  if(cylinderOption<6){
    input = <input id="capinp" type="range" min="1" max="2.5" step="0.1" defaultValue="2" onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption==6){
    input = <input id="capinp" type="range" min="2.5" max="4" step="0.1" defaultValue="3" onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption==8){
    input = <input id="capinp" type="range" min="4" max="8" step="0.1" defaultValue="5" onInput={this.onInput.bind(this)}/>
  } else if(cylinderOption==10){
    input = <input id="capinp" type="range" min="5" max="8" step="0.1" defaultValue="7" onInput={this.onInput.bind(this)}/>
  } else {
    input = <input id="capinp" type="range" min="5" max="7" step="0.1" defaultValue="5" onInput={this.onInput.bind(this)}/>
  }

   return (
     <form name="capacity">
     {input}
     {capacity} litres
     </form>
  )
 }
}

export default Capacity
