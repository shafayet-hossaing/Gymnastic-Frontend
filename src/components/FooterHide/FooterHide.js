import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../Footer/Footer';

const FooterHide = () => {
    const {pathname} = useLocation()
    return pathname === '/login' ? null : <Footer></Footer>
};

export default FooterHide;