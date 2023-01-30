import React from 'react';
import platform_status from '../../assets/icons/platform_status.png';
import events from '../../assets/icons/events.png';
import blog from '../../assets/icons/blog.png';

const Additional = () => {
    return (
        <div className='dark:bg-blend-lighten border shadow-2xl'>
            <h1 className="text-sm font-extralight leading-none text-center sm:text-4xl mt-5">Additional Resources</h1>
            <div className='lg:flex lg:justify-center md:block md:p-6 mt-2'>
                <div className="card lg:w-72 pt-5 rounded-none lg:h-32 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl  items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                    <figure className="p-5">
                        <img src={platform_status} alt="" className="rounded" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://status.fieldnation.com/" target="_blank rel=noreferrer"><small className="card-title pb-2 text-primary font-bold hover:underline">Platform Status</small></a>
                </div>
                <div className="card lg:w-72 pt-5 rounded-none lg:h-32 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl  items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                    <figure className="p-5">
                        <img src={events} alt="" className="rounded" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://fieldnation.com/events" target="_blank rel=noreferrer"><small className="card-title pb-2 text-primary font-bold hover:underline">Events & Webinars</small></a>
                </div>
                <div className="card lg:w-72 pt-5 rounded-none lg:h-32 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl  items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                    <figure className="p-5">
                        <img src={blog} alt="" className="rounded" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://fieldnation.com/resource-library" target="_blank rel=noreferrer"><small className="card-title pb-2 text-primary font-bold hover:underline">Blog</small></a>
                </div>
            </div>
        </div>
    );
};

export default Additional;