import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import Stats from './pages/Stats'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setLoggedIn] = useState(true)

  return (
    <>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/stats" element={<Stats />}/>
      </Routes>
      
    </>
  )
}

export default App
