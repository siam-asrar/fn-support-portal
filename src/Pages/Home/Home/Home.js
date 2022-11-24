import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home');

    return (
        <div className='mx-10'>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
        </div>
    );
};

export default Home;