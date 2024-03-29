import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Homebar = () => {
    const [activeSecondNav, setActiveSecondNav] = useState('/');
    return (
        <nav className="homebar">
            <NavLink to='/' onClick={() => setActiveSecondNav('/')} className={activeSecondNav === '/' ? "homebar-link-selected" : "homebar-link"}>ABOUT</NavLink>
            <NavLink to='/techstack' onClick={() => setActiveSecondNav('/techstack')} className={activeSecondNav === '/techstack' ? "homebar-link-selected" : "homebar-link"}>TECH STACK</NavLink>
            <NavLink to='/testimonials' onClick={() => setActiveSecondNav('/testimonials')} className={activeSecondNav === '/testimonials' ? "homebar-link-selected" : "homebar-link"}>TESTIMONIALS</NavLink>
        </nav>
    )
};

export default Homebar;