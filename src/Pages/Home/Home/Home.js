import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Resources from '../Resources/Resources/Resources';
import About from '../About/About';
import Additional from '../Resources/Additional/Additional';

const Home = () => {
    useTitle('Home');

    return (
        <>
            <Banner></Banner>
            <Resources></Resources>
            <Additional></Additional>
            <About></About>
        </>

    );
};

export default Home;