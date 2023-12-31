import { NavLink } from 'react-router-dom';

const Homebar = () => {
    return (
        <nav className="homebar">
            <NavLink to='/' className="homebar-link">PERSONAL INFORMATION</NavLink>
            <NavLink to='/tech-stack' className="homebar-link">TECH STACK</NavLink>
            <NavLink to='/testimonials' className="homebar-link">TESTIMONIALS</NavLink>
        </nav>
    )
};

export default Homebar;