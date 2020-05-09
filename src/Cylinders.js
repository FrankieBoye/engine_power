import React, { Component } from 'react'

class Cylinders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cylinderOption: 0
    };
  }

  handleCylinderChange = changeEvent => {
    this.setState({
      cylinderOption: parseInt(changeEvent.target.value)
    });
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
        checked={this.state.cylinderOption===4}
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
        checked={this.state.cylinderOption===5}
        onChange={this.handleCylinderChange}
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
        checked={this.state.cylinderOption===6}
        onChange={this.handleCylinderChange}
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
        checked={this.state.cylinderOption===8}
        onChange={this.handleCylinderChange}
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
        checked={this.state.cylinderOption===10}
        onChange={this.handleCylinderChange}
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
        checked={this.state.cylinderOption===12}
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
