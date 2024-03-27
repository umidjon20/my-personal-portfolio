import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'
import { Mode } from '../Mode/Mode'
import { Logotip } from '../Logotip/Logotip'
import './Header.scss'
export function Header() {
  return (
    <>
        {/* <div className="mode container">
            <Mode />
        </div> */}
    <header>
        <div className="header container">
            <Logotip /> 
            <div className="nav-bar">
                <nav>
                    <NavLink />
                </nav>
              
                <div>
                        <Link to={'/contact'}>
                            <button className='btn btn-style'>    
                            Contact Me
                            </button>
                        </Link>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

