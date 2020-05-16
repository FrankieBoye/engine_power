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
   return (
     <form name="capacity">
     <input id="capinp" type="range" min="1" max="7" step="0.1" defaultValue="2" onInput={this.onInput.bind(this)}/>
     {capacity} litres
     </form>
  )
 }
}

export default Capacity
