import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Resources from '../Resources/Resources/Resources';
import About from '../About/About';

const Home = () => {
    useTitle('Home');

    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <Resources></Resources>
            <About></About>
        </div>

    );
};

export default Home;