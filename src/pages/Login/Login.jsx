import { useEffect } from "react";
import { postLogin } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';


function Login(){
    const { login, logout } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        const loadLogin = async () => await postLogin("test3@test1.com", "password");
    
        loadLogin();
      }, []);

    const handleLogon = (e) => {
        login();
        navigate('/')
    }

    const handleLogout = (e) => {
        logout();
    }
    return (
    
    <div className="login">
        <h2>You must login</h2>
        <button onClick={handleLogon}>Login</button>
        <button onClick={handleLogout}>Logout</button>

    </div>
    );
}

export default Login;