import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import PhoneCard from './PhoneCard';

const Phones = () => {
    const phones = useLoaderData();
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <section className='my-10'>
            <h2 className='text-5xl font-bold text-primary pb-20'>Available Options</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ml-14 pl-8'>
                {
                    phones.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </section>
    );
};

export default Phones;