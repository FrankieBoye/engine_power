import React, { Component } from 'react'

class Aspiration extends Component {
  constructor(props) {
    super(props);
    this.handleAspChange = this.handleAspChange.bind(this)
    this.state = {
      aspiration: "1"
    }
  }

  handleAspChange(e) {
    this.setState({
      aspiration: e.target.value
    })
  }

  render() {

   return (
     <div className="aspiration">
     Select the aspiration:
     <br></br>
       <label>
         <input
           type="radio"
           name="asp"
           value="1"
           checked={this.state.aspiration === "1"}
           onChange={this.handleAspChange}
         />
         NA
       </label>
       <br></br>
       <label>
         <input
           type="radio"
           name="asp"
           value="2"
           checked={this.state.aspiration === "2"}
           onChange={this.handleAspChange}
         />
         Turbo
       </label>
     </div>
  )
 }
}

export default Aspiration
