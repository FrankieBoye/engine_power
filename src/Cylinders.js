import React, { Component } from 'react'

class Cylinders extends Component {
  constructor(props) {
    super(props);
    this.handleCylinderChange = this.handleCylinderChange.bind(this)
  }

  handleCylinderChange(onChange) {
    this.props.onCylinderChange(parseInt(onChange.target.value))
  }

  render() {
    const {cylinderOption} = this.props;
    return (

<form>

  <div className="cylinders">
  Select the number of cylinders:
  <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="4"
        checked={cylinderOption === 4}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      4 cylinders
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="5"
        checked={cylinderOption === 5}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      5 cylinders
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="6"
        checked={cylinderOption === 6}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      6 cylinders
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="8"
        checked={cylinderOption === 8}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      8 cylinders
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="10"
        checked={cylinderOption === 10}
        onChange={this.handleCylinderChange}
        className="cylinder-input"
      />
      10 cylinders
    </label>
    <br></br>
    <label>
      <input
        type="radio"
        name="cyls"
        value="12"
        checked={cylinderOption === 12}
        onChange={this.handleCylinderChange}
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
