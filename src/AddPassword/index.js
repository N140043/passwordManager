import './index.css'
import {Component} from 'react'

class AddPassword extends Component {
  render() {
    return (
      <form className="form-container">
        <h1 className="heading">Add New Password</h1>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="input-icon"
          />
          <input type="text" className="input" placeholder="Enter Website" />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="input-icon"
          />
          <input type="text" className="input" placeholder="Enter Username" />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="input-icon"
          />
          <input type="text" className="input" placeholder="Enter Password" />
        </div>
        <div className="button-container">
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    )
  }
}

export default AddPassword
