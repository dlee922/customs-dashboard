import React from 'react'
import { useNavigate } from 'react-router-dom'

function TopBar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/LoginPage')
  }

  return (
    <div>
      <p>
        Welcome to Customs Dashboard!
      </p>
      <button id='login-button' onClick={handleLoginClick}>
        Login/Register
      </button>
    </div>
  )
}
export default TopBar