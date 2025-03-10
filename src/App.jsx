import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="navMaster">
        <NavBar className="navBar" />
      </div>

      <div className='bodyMaster'>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
