import React from 'react';
import useTitle from '../../hooks/useTitle';

const AllSellers = () => {
    useTitle('All Sellers');

    return (
        <section className='my-10'>
            <h2 className="text-5xl font-bold text-primary pb-2">All Sellers</h2>
        </section>
    );
};

export default AllSellers;