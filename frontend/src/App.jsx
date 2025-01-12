import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/LoginPage/RegistrationPage'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/RegistrationPage' element={<RegistrationPage/>} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
