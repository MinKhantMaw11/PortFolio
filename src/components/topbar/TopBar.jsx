import "./topbar.css";
import { Link } from "react-router-dom";
export default function TopBar() {
    return(
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook" style={{color: "blue"}}></i>
            <i className="topIcon fa-brands fa-square-twitter twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest" style={{color: "red"}}></i>
            <i className="topIcon fa-brands fa-square-instagram" style={{color: "pink"}}></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className = "topListItem">
                        <Link to= "/" className="link">Home</Link>
                    </li>
                    <li className = "topListItem">
                        <Link to= "/" className="link">About</Link>
                    </li>
                    <li className = "topListItem">
                        <Link to= "/" className="link">Contact</Link>
                    </li>
                    <li className = "topListItem">
                        <Link to= "/write" className="link">Write</Link>
                    </li>
                    <li className = "topListItem link">
                        LogOut
                    </li>
                </ul>
            </div>
            <div className="topRight">
                        <ul className="topList">
                            <li className="topListItem">
                            <Link to= "/login" className="link">Login</Link>
                            </li>
                            <li className="topListItem">
                            <Link to= "/register" className="link">Register</Link>
                            </li>
                        </ul>
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}