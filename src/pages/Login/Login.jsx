import './Login.css'
import { useEffect, useState } from "react";
// import { postLogin } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';


function Login(){
    const { login, signup } = useAuth()
    const navigate = useNavigate();

    const [formType, setFormType] = useState('register');
    const [fullName, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const swapFormType = () => {
        if (formType === 'register'){
            setFormType('login')
        }else{
            setFormType('register')
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleLogon = async (e) => {
        setLoading(true)
        e.preventDefault()

        if (formType==='register' && fullName.length===0){
            setError("Full Name is Required")
            setLoading(false)
            return;
        }

        if (!validateEmail(username)){
            setError("Email must be valid")
            setLoading(false)
            return;
        }

        if (password.length<=6){
            setError("Password must be at least 7 characters")
            setLoading(false)
            return;
        }

        if (formType === "register"){
            var r = await signup(username, password);
            if (r.ok){
                console.log("r", r)
                navigate('/')
            }
            else {
                setError("Email is Aleady Taken")
            }
        } 
        if (formType === "login") {
            var r = await login(username, password);
            if (r.ok){
                console.log("r", r)
                navigate('/')
            }
            else {
                setError("Email or Password is Incorrect")
            }
        }
        
        setLoading(false);
    }

    const buttonText = () => loading ? 'Loading...' : (formType==="register" ? "Sign Up" : "Log In")

    return (
    <div className="login-page">
        
            <form className="login-container">
                <h2>Hours Outside</h2>
                <div className="subtext">A Simple Outdoor Activity Tracker <br/>
                    Built With Ruby on Rails & React</div>

                {formType === "register" &&
                    <div className="input-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Enter your Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
                    </div> 
                }

                <div className="input-group">
                    <label htmlFor="username">E-Mail</label>
                    <input type="text" id="username" name="username" placeholder="Enter your E-Mail" value={username} onChange={e => setUserName(e.target.value)} required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="login-btn" onClick={handleLogon} disabled={loading}>{buttonText()}</button>

                {error.length>0 && <div className="error">{error}</div>}

                {formType === "register" && <p className="signup-link">Already have an account? <a onClick={swapFormType} href="#">Sign in</a></p>}
                {formType === "login" &&<p className="signup-link">Don't have an account? <a onClick={swapFormType} href="#">Sign up</a></p>}

            </form>
    </div>
    );
}

export default Login;