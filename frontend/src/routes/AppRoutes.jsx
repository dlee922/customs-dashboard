import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../components/Homepage'
import LoginPage from '../components/LoginPage/LoginPage'
import RegistrationPage from '../components/LoginPage/RegistrationPage'
import Dashboard from '../components/Dashboard/Dashboard'
import ProtectedRoute from '../components/ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/LoginPage' element={<LoginPage />} />
      <Route path='/RegistrationPage' element={<RegistrationPage/>} />
      <Route path='/Dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  )
}
export default AppRoutes
