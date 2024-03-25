import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'
import { Mode } from '../Mode/Mode'
import { Logotip } from '../Logotip/Logotip'
import './Header.scss'
export function Header() {
  return (
    <header>
        <div className="mode container">
            <Mode />
        </div>
        <div className="header container">
            <Logotip /> 
            <div className="nav-bar">
                <nav>
                    <NavLink />
                </nav>
              
                <div>
                    <button className='btn btn-style'>contact me</button>
                </div>
            </div>
        </div>
    </header>
  )
}

