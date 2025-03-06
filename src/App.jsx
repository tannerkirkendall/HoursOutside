import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import Stats from './pages/Stats'
import { Routes, Route } from 'react-router-dom'

function App() {


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
