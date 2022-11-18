import './index.css'

const PasswordItem = props => {
  const {
    passwordDetails: {website, password, username},
  } = props
  const bgColor = `bg-color${Math.ceil(Math.random() * 8)}`
  return (
    <li className="password-item">
      <h1 className={`profile ${bgColor}`}>{website[0]}</h1>
      <div>
        <p className="para">{website}</p>
        <p className="para">{username}</p>
        <p className="para">{password}</p>
      </div>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
