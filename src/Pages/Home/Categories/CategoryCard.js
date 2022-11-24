import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { brand, about, img } = category;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold uppercase tracking-wide">{brand}</h2>
                    <p className="dark:text-gray-100">{about}</p>
                </div>
                <Link to={`/categories/${brand}`}>
                    <button type="button" className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 mx-auto hover:bg-purple-200">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;