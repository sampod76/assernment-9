import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    return (
        <div className=' h-screen flex flex-col justify-between'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;