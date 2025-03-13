import "./NavBar.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function NavBar(){
    const { logout } = useAuth()

    const handelLogout = () => {
        logout();
    }


    return (
        <div>
            <div className="fullBar">
                <div className="innerBar">
                    <Link to="/" className="nav-link">Dashboard</Link>
                    <Link to="/about" className="nav-link">About This Site</Link>
                    <span className="nav-link" onClick={handelLogout}>Logout</span>
                </div>
            </div>
        </div>
    )

}

export default NavBar