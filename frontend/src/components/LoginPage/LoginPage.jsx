import './LoginPage.css';
import React, {useState} from 'react'
import { login } from "../../api/authService"
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateDashboard = useNavigate();
  const navigateRegistration = useNavigate();

  const handleLoginClick = async () => {
    try {
      const response = await login(username, password)
      localStorage.setItem("token", response.data.access_token); // Save JWT token
      navigateDashboard("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login failed:", error.response.data.msg);
    }
  };

  const handleRegistrationClick = () => {
    navigateRegistration('/RegistrationPage');
  }

  return (
    <div>
      <p>This is the login page</p>
      <input 
        id='login-username'
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input 
        id='login-password'
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
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