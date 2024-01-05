import { NavLink } from 'react-router-dom';
import avatar from '../../images/avatar.JPG';
import './Header.css';


const Header = () => {
    return (
        <header className="navigation">
            <div className="header">
                <div className="img-container">
                <img src={avatar} alt="avatar" />
                </div>
                <h1>Diane Sayos-Briones</h1>
                <p>Software Engineer</p>
            </div>
            <nav className="navbar">
                <NavLink to="/" className='navbar-link'>HOME</NavLink>
                <NavLink to="/certifications" className='navbar-link'>CERTIFICATIONS</NavLink>
                <NavLink to="/projects" className='navbar-link'>PROJECTS</NavLink>
                <NavLink to="/contact" className='navbar-link'>CONTACT</NavLink>
            </nav>
        </header>
    )
};

export default Header;