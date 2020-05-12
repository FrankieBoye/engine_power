import React, { Component } from 'react'

class Cylinders extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleCylinderChange = this.handleCylinderChange.bind(this)
  //   this.state = {
  //     cylinderOption: 0
  //   };
  // }
  //
  // handleCylinderChange(event){
  //   this.setState({cylinderOption: parseInt(event.target.value)});
  // }
  handleCylinderChange(event){
    this.props.handleCylinderChange(event.target.value)
    // this.setState({cylinderOption: event.target.value});
  }

  render() {
    return (

<form>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="4"
        // checked={this.state.cylinderOption===4}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      4 cylinders
    </label>
  </div>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="5"
        // checked={this.state.cylinderOption===5}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.props.handleCylinderChange}
        className="cylinder-input"
      />
      5 cylinders
    </label>
  </div>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="6"
        // checked={this.state.cylinderOption===6}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.props.handleCylinderChange}
        className="cylinder-input"
      />
      6 cylinders
    </label>
  </div>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="8"
        // checked={this.state.cylinderOption===8}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.props.handleCylinderChange}
        className="cylinder-input"
      />
      8 cylinders
    </label>
  </div>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="10"
        // checked={this.state.cylinderOption===10}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.props.handleCylinderChange}
        className="cylinder-input"
      />
      10 cylinders
    </label>
  </div>

  <div className="cylinders">
    <label>
      <input
        type="radio"
        name="cyls"
        value="12"
        // checked={this.state.cylinderOption===12}
        // onChange={this.handleCylinderChange}
        checked={this.props.cylinderOption}
        onChange={this.props.handleCylinderChange}
        className="cylinder-input"
      />
      12 cylinders
    </label>
  </div>

</form>

    )
  }
}

export default Cylinders
