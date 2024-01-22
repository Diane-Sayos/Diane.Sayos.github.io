import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import avatar from '../../images/personal/avatar.JPG';

import './Header.css';


const Header = () => {
    const [activeNav, setActiveNav] = useState('/');

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
                <NavLink to="/" onClick={() => setActiveNav('/')}className={activeNav === '/' ? "navbar-link-selected" : "navbar-link"}>HOME</NavLink>
                <NavLink to="/certifications" onClick={() => setActiveNav('/certifications')}className={activeNav === '/certifications' ? "navbar-link-selected" : "navbar-link"}>CERTIFICATIONS</NavLink>
                <NavLink to="/projects" onClick={() => setActiveNav('/projects')}className={activeNav === '/projects' ? "navbar-link-selected" : "navbar-link"}>PROJECTS</NavLink>
                <NavLink to="/contact" onClick={() => setActiveNav('/contact')}className={activeNav === '/contact' ? "navbar-link-selected" : "navbar-link"}>CONTACT</NavLink>
            </nav>
        </header>
    )
};

export default Header;