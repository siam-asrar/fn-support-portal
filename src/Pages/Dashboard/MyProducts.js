import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loader from '../Shared/Loader/Loader';
import MyProduct from './MyProduct';

const MyProducts = () => {
    useTitle('My Products');
    const { user, loading } = useContext(AuthContext);

    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`https://b612-used-products-resale-server-side-siam-asrar.vercel.app/phones/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user?.email]);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <section className='my-10'>
            <h2 className='text-5xl font-bold text-primary pb-20'>My Products</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20 ml-14 pl-8'>
                {
                    myProducts.map(myProduct => <MyProduct
                        key={myProduct._id}
                        myProduct={myProduct}
                    ></MyProduct>)
                }
            </div>
        </section>
    );
};

export default MyProducts;