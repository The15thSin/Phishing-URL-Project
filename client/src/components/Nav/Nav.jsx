import './Nav.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_no_bg.png'

function Nav() {
    return (
        <nav className="navbar">
            <NavLink to="/" style={{textDecoration: 'none'}}>
            <div className='app-logo'>
                <img src={logo} alt='logo' />
                <p className='al-text-red'>Red</p><p className='al-text-shield '>Shield</p> 
            </div>
            </NavLink>
            <div className='nav-options'>
                <span>
                    <NavLink className="no-opts" to="/">Home</NavLink> 
                </span>
                <span>
                    <NavLink className="no-opts" to="/about-us">About Us</NavLink>
                </span>
                <span>
                    <NavLink className="no-opts" to="/faqs">FAQs</NavLink>
                </span>
            </div>
        </nav>
    )
}

export default Nav