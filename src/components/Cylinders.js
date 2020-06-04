import React, { Component } from 'react'

class Cylinders extends Component {
  constructor(props) {
    super(props);
    this.handleCylinderChange = this.handleCylinderChange.bind(this)
  }

  handleCylinderChange(onChange) {
    this.props.onCylinderChange(parseInt(onChange.target.value));
    this.props.onDefaultCap(parseInt(onChange.target.name))
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
        name="2"
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
        name="2"
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
        name="3"
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
        name="5"
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
        name="6"
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
        name="6"
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
