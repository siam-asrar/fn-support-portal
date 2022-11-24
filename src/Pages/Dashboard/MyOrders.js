import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyOrders = () => {
    useTitle('My Orders');

    return (
        <section className='my-10'>
            <h2 className="text-5xl font-bold text-primary pb-2">My Orders</h2>
        </section>
    );
};

export default MyOrders;