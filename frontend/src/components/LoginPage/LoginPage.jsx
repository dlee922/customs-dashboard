import './LoginPage.css';
import React, {useState} from 'react'
import { login } from "../../api/authService"
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigateDashboard = useNavigate();
  const navigateRegistration = useNavigate();
  const navigateLogin = useNavigate();

  const handleLoginClick = async () => {
    try {
      const response = await login(username, password)
      localStorage.setItem("token", response.data.access_token); // Save JWT token
      navigateDashboard("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login failed:", error.response.data.msg);
      setLoginError(true); // set error state to true on failed login
      navigateLogin("/LoginPage"); // redirect back to login page
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
        type={showPassword ? 'text': 'password'} // toggle between text and password
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      {/* Checkbox with label aligned side by side */}
      <label className="show-password-label">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <span>Show Password</span> 
      </label>
      
      <button onClick={handleLoginClick}>
        Login
      </button>

      {loginError && (
        <p style={{ color: 'red' }}>
          Invalid username or password. Please try again.
        </p>
      )}
      
      <hr/>
      <p>Don't have an account?</p>
      <button onClick={handleRegistrationClick}>
        Register
      </button>
    </div>
  )
}
export default LoginPage