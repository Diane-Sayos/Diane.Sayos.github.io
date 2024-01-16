import { NavLink } from 'react-router-dom';

const Homebar = () => {
    return (
        <nav className="homebar">
            <NavLink to='/' className="homebar-link">TECH STACK</NavLink>
            <NavLink to='/education' className="homebar-link">EDUCATION</NavLink>
            <NavLink to='/testimonials' className="homebar-link">TESTIMONIALS</NavLink>
        </nav>
    )
};

export default Homebar;