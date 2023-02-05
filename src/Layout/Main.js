import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='mx-auto lg:w-full'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Main;