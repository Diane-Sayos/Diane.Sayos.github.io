import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default Root;