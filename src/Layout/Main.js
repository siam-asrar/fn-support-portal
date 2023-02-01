import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='mx-auto lg:w-10/12'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;