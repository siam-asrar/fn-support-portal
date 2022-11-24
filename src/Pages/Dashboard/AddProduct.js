import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loader from '../Shared/Loader/Loader';

const AddProduct = () => {
    useTitle('Add Product');
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const model = form.model.value;
        const productPhoto = form.image.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const condition = form.condition.value;
        const contactInfo = form.contactInfo.value;
        const location = form.location.value;
        const purchaseYear = form.purchaseYear.value;
        const yearsUsed = form.yearsUsed.value;
        const description = form.description.value;

        const phone = {
            name: user.displayName,
            email: user.email,
            brand,
            model,
            resalePrice,
            originalPrice,
            condition,
            contactInfo,
            location,
            purchaseYear,
            yearsUsed,
            description,
            productPhoto
        }

        // save phone info to the DB
        fetch('http://localhost:4000/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Successfully added ${model} in the Marketplace`);
                navigate('/dashboard/myProducts');
            });
    }


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="relative flex flex-col justify-center py-10">
            <h2 className="text-5xl font-bold text-primary pb-2">Add Product</h2>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl my-20">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Please fill out the form with the details
                </h1>
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="mb-2">
                        <div className="form-control w-full mb-6">
                            <label
                                htmlFor="brand"
                                className="mt-6  text-start block text-sm font-semibold text-gray-900"
                            >
                                Brand
                            </label>
                            <select name="brand"
                                className="select select-bordered block w-full px-4 py-2 mt-6 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 uppercase">
                                <option>iphone</option>
                                <option>samsung</option>
                                <option>huawei</option>
                            </select>
                        </div>
                        <label
                            htmlFor="model"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Phone model
                        </label>
                        <input
                            type="text"
                            name='model'
                            placeholder='Phone model'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="image"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Phone image
                        </label>
                        <input
                            type="text"
                            name='image'
                            placeholder='Phone image'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="resalePrice"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Resale price
                        </label>
                        <input
                            type="number"
                            name='resalePrice'
                            placeholder='Resale price'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="originalPrice"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Original price
                        </label>
                        <input
                            type="number"
                            name='originalPrice'
                            placeholder='Original price'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="form-control w-full mb-6">
                        <label
                            htmlFor="condition"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Condition
                        </label>
                        <select name="condition"
                            className="select select-bordered block w-full px-4 py-2 mt-6 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 uppercase">
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="contactInfo"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Contact Info
                        </label>
                        <input
                            type="number"
                            name='contactInfo'
                            placeholder='Contact Info'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="location"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Your Location
                        </label>
                        <input
                            type="text"
                            name='location'
                            placeholder='Your Location'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="purchaseYear"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Year of Purchase
                        </label>
                        <input
                            type="date"
                            name='purchaseYear'
                            placeholder='Year of Purchase'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="yearsUsed"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Years in Use
                        </label>
                        <input
                            type="number"
                            name='yearsUsed'
                            placeholder='Years in Use'
                            className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="mt-6  text-start block text-sm font-semibold text-gray-900"
                        >
                            Phone Description
                        </label>
                        <textarea
                            name='description'
                            className="textarea textarea-bordered h-24 w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40 "
                            placeholder="Description"
                            required
                        >
                        </textarea>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-gray-900 transition-colors duration-200 transform bg-violet-600 rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-600">
                            Add Phone
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;