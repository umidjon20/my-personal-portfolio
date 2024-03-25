import { Link } from "react-router-dom";
 
import './NavLink.scss'
export function NavLink(){
    return(
        <ul className="nav-link">
            <li>
                <Link to={'/home'}
            //    className={({isActive})=>{
            //     return isActive ? isActive :''
            //    }} 
               >Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/work'}>Work</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <span></span>
        </ul>
    )
}