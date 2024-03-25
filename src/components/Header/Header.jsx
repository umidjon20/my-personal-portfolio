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
            <div className="logo">
                <Logotip />
                <div className="logotip">
                    <span className='clr'>D</span><span className="text-gr">ev</span>.
                </div>
            </div>
            <div className="nav-bar">
                <nav>
                    <NavLink />
                </nav>
                {/* <ContactBtn /> */}
                <div>
                    <button className='btn btn-style'>contact me</button>
                </div>
            </div>
        </div>
    </header>
  )
}

