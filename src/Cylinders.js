import React, { Component } from 'react'

class Cylinders extends Component {
  render() {
    return (

      <form>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="4cylinders"
        checked={true}
        className="form-check-input"
      />
      4 cylinders
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="5cylinders"
        className="form-check-input"
      />
      5 cylinders
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="6cylinders"
        className="form-check-input"
      />
      6 cylinders
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="8cylinders"
        className="form-check-input"
      />
      8 cylinders
    </label>
  </div>

</form>

    )
  }
}

export default Cylinders
