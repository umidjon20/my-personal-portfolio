import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'
import { ContactBtn } from '../ContactBtn/ContactBtn'
import './Header.scss'
export function Header() {
  return (
    <header>
        <div className="header container">
            <div className="logo">
                <div className="circle"></div>
                <div className="logotip">
                    <span className='clr'>D</span><span className="text-gr">ev</span>.
                </div>
            </div>
            <div className="nav-bar">
                <nav>
                    <NavLink />
                </nav>
                <ContactBtn />
            </div>
        </div>
    </header>
  )
}

