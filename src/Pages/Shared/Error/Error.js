import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container-fluid  bg-gray-900 h-screen w-screen' >
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-violet-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <br />
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find the resource you're looking for!</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">Go back to homepage.</p>
                        <Link to='/home' className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;