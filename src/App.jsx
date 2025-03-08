import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import Stats from './pages/Stats'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <NavBar className="navBar" />
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/stats" element={<Stats />}/>
      </Routes>
      
    </>
  )
}

export default App
