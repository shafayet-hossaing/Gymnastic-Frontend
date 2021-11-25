import React from 'react';
import { useLocation } from 'react-router';
import Header from '../Header/Header';

const HeaderHide = () => {
    const {pathname} = useLocation()
    return pathname === '/login' ? null : <Header></Header>
};

export default HeaderHide;
