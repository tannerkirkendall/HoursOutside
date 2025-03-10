import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <div className="fullBar">
                <div className="innerBar">
                    <Link to="/" className="nav-link">Dashboard</Link>
                    <Link to="/about" className="nav-link">About This Site</Link>
                    <Link to="/login" className="nav-link">Logout</Link>
                </div>
            </div>
        </div>
    )

}

export default NavBar