import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { loading } = useContext(AuthContext);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <section className='my-10'>
            <h2 className='text-5xl font-bold text-primary pb-20'>Please select a category</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ml-14 pl-8 gap-y-20'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </section>
    );
};

export default Categories;
