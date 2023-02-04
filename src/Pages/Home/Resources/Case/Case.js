import React from 'react';
import support from '../../../../assets/icons/support.png';

const Case = () => {
    return (
        <div className='bg-blend-lighten mb-5'>
            <h1 className="text-sm font-extralight leading-none text-center sm:text-4xl pb-5">Can't find what you're looking for?
            </h1>
            <div className="hero-content text-center block w-fit py-5 mx-auto border-2" >
                <h3 className='text-xl font-extralight leading-none text-center  pb-5'>Already Have a Field Nation Account?</h3>
                <small><p className="px-8 mb-5">Create and monitor status of account-related support cases.
                    For work order-related assistance, use 'Report Problem' within <br />the work order.</p></small>
                <a href="https://app.fieldnation.com/support-cases" target="_blank rel=noreferrer" className='text-sm bg-primary p-2 rounded text-white'>
                    Create Case
                </a>
            </div>
            <div className='lg:flex lg:justify-center items-center md:block my-2'>
                <div className="hero-content text-center block lg:w-fit  md:w-full  border-2 lg:mr-5 my-3 py-6 px-12">
                    <h3 className='text-xl font-extralight leading-none text-center'>Don't Have an Account Yet?</h3>
                    <small><p className="px-10 mt-4 mb-7">Learn more about Field Nation or get started with a new account today.</p></small>
                    <a href="https://fieldnation.com/" target="_blank rel=noreferrer" className='text-sm bg-primary p-2 rounded text-white'>
                        Get Started
                    </a>
                </div>
                <div className="block text-center border-2 px-2 my-3 py-1">
                    <figure>
                        <img src={support} alt="" className="rounded mx-auto" style={{ height: '30px' }} />
                    </figure>
                    <div className='mx-auto'>
                        <small><p className="px-8 my-2">Phone support  <br />available 24/7 <br /> for new and existing  <br />users.</p></small>
                        <a className='text-sm px-5 text-primary font-semibold' href="tel:+18775734353" rel="noopener">1-877-573-4353 ext.1</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;
