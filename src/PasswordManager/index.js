import './index.css'
import {v4 as uuid} from 'uuid'
import {Component} from 'react'
import AddPassword from '../AddPassword'
import PasswordItem from '../PasswordItem'

const initialPasswords = [
  {
    id: uuid(),
    website: 'Email',
    username: 'Anji@Thanu',
    password: 'PottiMissYou',
  },
]
class PasswordManager extends Component {
  state = {
    passwordsList: initialPasswords,
  }

  passwordsContainer = () => (
    <div className="passwords-container-bottom">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  render() {
    const {passwordsList} = this.state
    console.log(passwordsList)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-container">
          <div className="img-container-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image-smaller"
            />
          </div>

          <AddPassword />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image-large"
          />
        </div>
        <div className="bottom-container">
          <div className="header-section">
            <h1 className="password-heading">
              Your Passwords{' '}
              <span className="password-count">{passwordsList.length}</span>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="show-password-container">
            <div className="show-pass-box">
              <input type="checkbox" id="show-password" />
              <label htmlFor="show-password" className="show-password-para">
                Show Passwords
              </label>
            </div>
          </div>
          {passwordsList.length === 0 ? (
            this.passwordsContainer()
          ) : (
            <ul className="passwords-saved-container">
              {passwordsList.map(each => (
                <PasswordItem passwordDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
