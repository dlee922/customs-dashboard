import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from "../../api/authService"


function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateDashboard = useNavigate();

  const handleRegistrationClick = async () => {
    try {
      const response = await register(username, password);
      localStorage.setItem("token", response.data.access_token);
      navigateDashboard("/dashboard");
    } catch(error) {
      console.error("Registration failed: ", error.response.data.msg);
    }
  }

  return (
    <div>
      <p>This is the registration page</p>
      <input 
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input 
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistrationClick}>
        Register
      </button>
    </div>
  )
}
export default RegistrationPage;