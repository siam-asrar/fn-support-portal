import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loader from '../Shared/Loader/Loader';

const Register = () => {
    useTitle('Sign Up')
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.userType.value;
        console.log(name, photoURL, email, password, userType);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user?.email
                }

                fetch('http://localhost:4000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('accessToken', data.token);
                    });

                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);

                if (user?.email) {
                    const userProfile = {
                        name,
                        email,
                        photoURL,
                        role: userType
                    }

                    fetch('http://localhost:4000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Successfully Created User")
                            console.log('saveUser', data);
                        })
                }

                navigate('/');
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => console.error(error));
    }

    if (loading && !error) {
        return <Loader></Loader>
    }

    return (
        <div className="relative flex flex-col justify-center min-h-scree my-10">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign up
                </h1>
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Full Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="photoURL"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo URL
                        </label>
                        <input
                            name="photoURL"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>
                    <div className="form-control w-full mb-6">
                        <label
                            htmlFor="userType"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            User Type
                        </label>
                        <select name="userType"
                            className="select select-bordered block w-full px-4 py-2 mt-6 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option>Buyer</option>
                            <option className='text-center'>Seller</option>
                        </select>
                    </div>
                    <div className="mt-10">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
            <p className='text-red-500 my-7'>{error}</p>
        </div>
    );
};

export default Register;