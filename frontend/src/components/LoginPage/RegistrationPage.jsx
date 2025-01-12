import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegistrationPage() {
  const navigateDashboard = useNavigate();

  const handleRegistrationClick = () => {
    navigateDashboard('/Dashboard');
  }

  return (
    <div>
      <p>This is the registration page</p>
      <input placeholder='username' />
      <input placeholder='password' />
      <button onClick={handleRegistrationClick}>
        Register
      </button>
    </div>
  )
}
export default RegistrationPage;