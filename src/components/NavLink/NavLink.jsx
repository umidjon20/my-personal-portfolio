import { Link } from "react-router-dom";
 
import './NavLink.scss'
export function NavLink(){
    return(
        <ul className="nav-link">
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About Me</Link>
            </li>
            <li>
                <Link to={'/projects'}>Projects</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
    )
}