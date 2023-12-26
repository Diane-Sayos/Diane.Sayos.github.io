import { NavLink } from 'react-router-dom';
import avatar from '../../images/avatar.JPG';
import './Header.css';


const Header = () => {
    return (
        <header className="navigation">
            <div className="header">
                <div className="img-container">
                <img src={avatar} alt="#" />
                </div>
                <h1>Diane Sayos-Briones</h1>
                <p>Software Engineer</p>
            </div>
            <nav className="navbar">
                <NavLink to="/" className='navbar-link'>Home</NavLink>
                <NavLink to="/about" className='navbar-link'>About</NavLink>
                <NavLink to="/certifications" className='navbar-link'>Certifications</NavLink>
                <NavLink to="/projects" className='navbar-link'>Projects</NavLink>
            </nav>
        </header>
    )
};

export default Header;