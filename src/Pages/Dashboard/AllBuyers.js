import React from 'react';
import useTitle from '../../hooks/useTitle';

const AllBuyers = () => {
    useTitle('All Buyers');

    return (
        <section className='my-10'>
            <h2 className="text-5xl font-bold text-primary pb-2">All Buyers</h2>
        </section>
    );
};

export default AllBuyers;