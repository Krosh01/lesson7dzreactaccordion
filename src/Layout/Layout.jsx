import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Footer from './Footer/Footer';
import Header from "./Header/Header";

const Layout = () => {
    return (
        <>
            <Header/>
           <Outlet/>  
           <Footer/>
        </>
    );
};

export default Layout;