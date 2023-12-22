import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navigation">
            <div className="header">
                <img src="#" alt="#" />
                <h1>Diane Sayos-Briones</h1>
                <p>Software Engineer</p>
            </div>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/certifications">Certifications</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav>
        </header>
    )
};

export default Header;