import { NavLink } from 'react-router-dom';

const Homebar = () => {
    return (
        <nav className="homebar">
            <NavLink to='/' className="homebar-link">PERSONAL INFORMATION</NavLink>
            <NavLink to='/education' className="homebar-link">EDUCATION</NavLink>
            <NavLink to='/tech-stack' className="homebar-link">TECH STACK</NavLink>
        </nav>
    )
};

export default Homebar;