import React, { Component } from 'react'

class Capacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: 2
    };
  }

  onInput() {
    var input = document.getElementById("capinp");
    var cap = input.value;
    this.setState({
      capacity: parseFloat(cap)
    })
}

  render() {
   return (
     <form name="capacity">
     <input id="capinp" type="range" min="1" max="7" step="0.1" defaultValue="2" onInput={this.onInput.bind(this)}/>
     {this.state.capacity} litres
     </form>
  )
 }
}

export default Capacity
