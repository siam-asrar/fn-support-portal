import React from 'react';
import support from '../../assets/icons/support.png';

const Case = () => {
    return (
        <div className='mb-5'>
            <h1 className="text-xl mb-10 font-extralight leading-none text-center sm:text-4xl my-3">Can't find what you're looking for?
            </h1>
            <div className="hero-content text-center block w-fit py-10 mx-auto border-2 bg-gray-100">
                <h3 className='text-xl font-extralight leading-none text-center'>Already Have a Field Nation Account?</h3>
                <small><p className="my-5 px-16">Create and monitor status of account-related support cases.
                    For work order-related assistance, use 'Report Problem' within <br />the work order.</p></small>
                <a href="https://app.fieldnation.com/support-cases" target="_blank rel=noreferrer">
                    <button className="btn btn-primary mt-5">Create Case</button>
                </a>
            </div>
            <div className='lg:flex lg:justify-center md:block my-2 px-10'>
                <div className="hero-content text-center block w-fit border-2 px-10 py-5 lg:mr-5 bg-gray-100 my-3">
                    <h3 className='text-xl font-extralight leading-none text-center pt-10'>Don't Have an Account Yet?</h3>
                    <small><p className="my-3 px-16">Learn more about Field Nation or get started with a new account today.</p></small>
                    <a href="https://fieldnation.com/" target="_blank rel=noreferrer">
                        <button className="btn btn-primary mt-5">Get Started</button>
                    </a>
                </div>
                <div className="block text-center border-2 px-10 py-5 bg-gray-100 my-3">
                    <figure className="p-2">
                        <img src={support} alt="" className="rounded mx-auto" style={{ height: '40px' }} />
                    </figure>
                    <small><h3 className='text-sm'>Phone support  <br />available 24/7 <br /> for new and existing  <br />users.</h3></small>
                    <br />
                    <a className='text-sm px-2 text-primary font-semibold' href="tel:+18775734353" rel="noopener">1-877-573-4353 ext.1</a>
                </div>
            </div>
        </div>
    );
};

export default Case;