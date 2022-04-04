import "./Navbar.scss";
import "./../../styles/global.scss"
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./../../assets/icons/planet.svg";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="container row">
                <div className="navbar__links">
                <Link to="/" className="navbar__link">Home</Link>
                <Link to="/fav" className="navbar__link">Favourites</Link>
                </div>
                <Logo className="navbar__image"/>
            </div>
        </div>
    )
}