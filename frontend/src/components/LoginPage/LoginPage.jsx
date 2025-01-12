import './LoginPage.css';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigateDashboard = useNavigate();
  const navigateRegistration = useNavigate();

  const handleLoginClick = () => {
    navigateDashboard('/Dashboard');
  }

  const handleRegistrationClick = () => {
    navigateRegistration('/RegistrationPage');
  }

  return (
    <div>
      <p>This is the login page</p>
      <input placeholder='username' />
      <input placeholder='password' />
      <button onClick={handleLoginClick}>
        Login
      </button>
      <hr/>
      <p>Don't have an account?</p>
      <button onClick={handleRegistrationClick}>
        Register
      </button>
    </div>
  )
}
export default LoginPage