import React, { Component } from 'react'

class Capacity extends Component {

  onInput() {
    var input = document.getElementById("capinp");
    var capacity = input.value;
    this.setState({
      value: capacity
    })
}
  render() {
   return (
     <form name="capacity">
     <input id="capinp" type="range" min="1" max="7" step="0.1" defaultValue="2" onInput={this.onInput.bind(this)}/>
     </form>
  )
 }
}

export default Capacity
