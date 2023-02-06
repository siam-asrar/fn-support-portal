import React from 'react';
import support from '../../../../assets/icons/support.png';

const Case = () => {
    return (
        <div className='mb-5'>
            <h1 className="text-2xl font-serif leading-none text-center pb-5">Can't find what you're looking for?
            </h1>
            <div className="hero-content shadow text-center block w-fit py-5 mx-auto border border-gray-300">
                <h3 className='text-xl font-f font-extralight leading-none text-center  pb-5'>Already Have a Field Nation Account?</h3>
                <small><p className="px-4 mb-5">Create and monitor status of account-related support cases.
                    For work order-related assistance, use 'Report Problem' within <br />the work order.</p></small>
                <a href="https://app.fieldnation.com/support-cases" target="_blank rel=noreferrer" className='hover:bg-secondary text-sm bg-primary p-2 rounded text-base-100'>
                    Create Case
                </a>
            </div>
            <div className='lg:flex lg:justify-center items-center md:block my-2'>
                <div className="hero-content shadow text-center block lg:w-fit  md:w-full lg:mr-5 my-3 py-6 px-12 border border-gray-300">
                    <h3 className='text-xl font-f font-extralight leading-none text-center'>Don't Have an Account Yet?</h3>
                    <small><p className="px-8 mt-4 mb-7">Learn more about Field Nation or get started with a new account today.</p></small>
                    <a href="https://fieldnation.com/" target="_blank rel=noreferrer" className='hover:bg-secondary text-sm bg-primary p-2 rounded text-base-100'>
                        Get Started
                    </a>
                </div>
                <div className="block text-center my-3 py-1 border shadow border-gray-300">
                    <figure>
                        <img src={support} alt="" className="rounded mx-auto" style={{ height: '30px' }} />
                    </figure>
                    <div className='mx-auto'>
                        <small><p className="px-6 my-2">Phone support  <br />available 24/7 <br /> for new and existing  <br />users.</p></small>
                        <a href="tel:+18775734353" rel="noopener" className='text-sm px-6 text-primary font-semibold hover:text-secondary'>1-877-573-4353 ext.1</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;
