import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='lg:mx-40'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;