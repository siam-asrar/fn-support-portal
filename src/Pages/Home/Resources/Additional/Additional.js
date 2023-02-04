import React from 'react';
import platform_status from '../../../../assets/icons/platform_status.png';
import events from '../../../../assets/icons/events.png';
import blog from '../../../../assets/icons/blog.png';

const Additional = () => {
    return (
        <div className='dark:bg-blend-lighten border border-t-2  shadow-2xl mx-auto py-2'>
            <h1 className="text-sm font-extralight leading-none sm:text-4xl pt-5">Additional Resources</h1>
            <div className='lg:flex lg:justify-center md:block md:p-6'>
                <div className="lg:w-64 rounded-none lg:h-24 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl lg:mx-2 mx-auto">
                    <figure className='lg:pt-3 my-2'>
                        <img src={platform_status} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://status.fieldnation.com/" target="_blank rel=noreferrer" className='text-primary font-bold hover:underline'>
                        <small>
                            Platform Status
                        </small>
                    </a>
                </div>
                <div className="lg:w-64 rounded-none lg:h-24 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl lg:mx-2 mx-auto">
                    <figure className='lg:pt-3 my-2'>
                        <img src={events} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://fieldnation.com/events" target="_blank rel=noreferrer" className='text-primary font-bold hover:underline'>
                        <small>
                            Events & Webinars
                        </small>
                    </a>
                </div>
                <div className="lg:w-64 rounded-none lg:h-24 md:w-full border border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl lg:mx-2 mx-auto">
                    <figure className='lg:pt-3 my-2'>
                        <img src={blog} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                    </figure>
                    <a href="https://fieldnation.com/resource-library" target="_blank rel=noreferrer" className='text-primary font-bold hover:underline'>
                        <small>
                            Blog
                        </small>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Additional;