import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyProducts = () => {
    useTitle('My Products');

    return (
        <div>
            <h2>MY Products cards</h2>
        </div>
    );
};

export default MyProducts;