import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {


  return (
    <>
      <div className="navMaster">
        <NavBar className="navBar" />
      </div>

      <div className='bodyMaster'>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Dashboard/>}/>
            </Route>

            <Route exact path='/about' element={<PrivateRoute/>}>
              <Route exact path='/about' element={<About/>}/>
            </Route>
            
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/about" element={<About />}/> */}
        </Routes>
      </div>
      
    </>
  )
}

export default App
