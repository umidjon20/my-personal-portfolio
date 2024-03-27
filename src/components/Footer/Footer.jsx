import {NavLink} from '../NavLink/NavLink'
import Telegram from '../../assets/icons/telegram-logo.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Github from '../../assets/icons/github-color.svg'
import Email from '../../assets/icons/email.svg'
import Home from '../../assets/icons/home.svg'
import Phone from '../../assets/icons/phone.svg'




import './Footer.scss'

export function Footer(){
    return(
        <footer>
            <div className="footer-page container">
                <div className="footer-head">
                   <div className="footer-logo">
                   </div>
                        <NavLink />
 

                </div>
                <hr />
                <div className="footer-page-info">
                    <address>
                        <div className="address flex">
                            <Home />
                           <span> Uzbekistan, Qarshi</span>
                        </div>
                        <div className="email flex">
                            <Email />
                            <span>amirqulov@gmail.com</span>
                            </div>
                        <div className="phone-number flex">
                            <Phone />
                           <span> +998997346704</span>
                        </div>
                    </address>
                    <div className="footer-page-social-links">
                    <span>
                        <a href="#">
                            <Telegram />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/front_amirqulov_end/">
                            <Instagram />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <Linkedin />
                        </a>
                    </span>
                    <span>
                        <a href="github.com/umidjon20">
                            <Github />
                        </a>
                    </span>
                   </div>
                </div>

            </div>
                   <div className="footer-bt">
                    All right reserved
                   </div>
        </footer>
    )
}