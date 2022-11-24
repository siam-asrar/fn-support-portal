import React from 'react';
import About from '../About/About';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner></Banner>
            <About></About>
            <Advertised></Advertised>
            <Categories></Categories>
        </div>
    );
};

export default Home;