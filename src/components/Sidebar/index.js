import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/logo_r.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to= "/">
            <img src = {LogoR} alt="logo" />
        </Link>

    <nav>
        <NavLink exact= "true" activeclassname = "active" to="/">
            <FontAwesomeIcon icon={faHome} color="#FFFFFF"/>
        </NavLink>
        <NavLink exact= "true" activeclassname = "active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#FFFFFF"/>
        </NavLink>
        <NavLink exact= "true" activeclassname = "active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF"/>
        </NavLink>
        
    </nav>

    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/reilly-catrambone/'>
                <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF">

                </FontAwesomeIcon>
            </a>
        </li>

        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/reillycatrambone'>
                <FontAwesomeIcon icon={faGithub} color="#FFFFFF">

                </FontAwesomeIcon>
            </a>
        </li>
    </ul>

    </div>
)

export default Sidebar  