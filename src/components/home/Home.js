import './Home.css';

import { Outlet } from 'react-router-dom';
import Homebar from './Homebar';

const Home = () => {
    return (
        <>
            <Homebar />
            <Outlet />
        </>
    )
};

export default Home;