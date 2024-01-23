import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import avatar from '../../images/personal/avatar.JPG';
import Avatar from '@mui/material/Avatar';

import './Header.css';

import Contact from '../contact/Contact';


const Header = () => {
    const [activeNav, setActiveNav] = useState('/');

    return (
        <header className="navigation">
            <nav className="navbar">
                <div className="navbar-avatar-container">
                    <Avatar alt="Diane Sayos-Briones" src={avatar} />
                    <h3 className="avatar-name">Diane Sayos-Briones</h3>
                </div>
                <div className="navbar-container">
                    <NavLink to="/" onClick={() => setActiveNav('/')}className={activeNav === '/' ? "navbar-link-selected" : "navbar-link"}>HOME</NavLink>
                    <NavLink to="/certifications" onClick={() => setActiveNav('/certifications')}className={activeNav === '/certifications' ? "navbar-link-selected" : "navbar-link"}>CERTIFICATIONS</NavLink>
                    <NavLink to="/projects" onClick={() => setActiveNav('/projects')}className={activeNav === '/projects' ? "navbar-link-selected" : "navbar-link"}>PROJECTS</NavLink>
                    <Contact />
                </div>
            </nav>
        </header>
    )
};

export default Header;