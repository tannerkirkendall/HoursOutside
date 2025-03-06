import { useEffect } from "react";
import { postLogin } from "../services/api";

function Login(){
    
    useEffect(() => {
        const loadLogin = async () => await postLogin();
    
        loadLogin();
      }, []);

    return (
    
    <div className="login">
        <h2>You must login</h2>

        
    </div>
    );
}

export default Login;