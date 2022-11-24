import React from 'react';

const Advertised = () => {
    return (
        <section className='py-10'>
            <div>
                <h2 className="text-5xl font-bold text-primary pb-2">Popular Products</h2>
            </div>
            <div className="relative flex items-center justify-center w-full dark:text-gray-50 my-10">
                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?1" alt='' />
                        <p className='bg-gray-900'>
                            How do you like this phone?
                        </p>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 mx-auto hover:bg-violet-200">Buy Now</button>
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?2" alt='' />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?3" alt='' />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?4" alt='' />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src="https://source.unsplash.com/random/240x360/?5" alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertised;