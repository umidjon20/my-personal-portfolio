import { Link } from "react-router-dom";
 
import './NavLink.scss'
export function NavLink(){
    return(
        <ul>
            <li>
                Home
            </li>
            <li>
                About Me
            </li>
            <li>
                Projects
            </li>
            <li>
                Contact
            </li>
        </ul>
    )
}