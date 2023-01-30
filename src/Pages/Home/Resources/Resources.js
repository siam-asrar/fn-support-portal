import React from 'react';
import providers from '../../../assets/icons/providers.png';
import buyers from '../../../assets/icons/buyers.png';
import service_companies from '../../../assets/icons/service_companies.png';
import { Link } from 'react-router-dom';
import Case from '../../Case/Case';

const User = () => {
    return (
        <div className='dark:bg-light border shadow-lg my-3 pt-5'>
            <div className='dark:bg-blend-lighten'>
                <h1 className="text-sm font-extralight leading-none text-center sm:text-4xl">Resources</h1>
                <div className='lg:flex lg:my-2 lg:justify-center md:block md:p-6'>
                    <div className="card lg:w-72 lg:h-36 md:w-full border rounded-none border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                        <figure className="p-5">
                            <img src={providers} alt="" className="rounded" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/providers/getting-started'>
                            <small className="card-title pb-2 text-primary hover:underline">Providers</small>
                        </Link>
                        <small>I am a technician who is performing work at Field Nation.</small>
                    </div>
                    <div className="card lg:w-72 lg:h-36 md:w-full border rounded-none border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl  items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                        <figure className="p-5">
                            <img src={service_companies} alt="" className="rounded" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/service_companies/getting-started'>
                            <small className="card-title pb-2 text-primary  hover:underline">Service Companies</small>
                        </Link>
                        <small>A group of technicians performing work on Field Nation.</small>
                    </div>
                    <div className="card lg:w-72 lg:h-36 md:w-full border rounded-none border-t-indigo-700 border-t-2 dark:bg-dark shadow-xl  items-center text-center pb-5 lg:mx-2 mx-auto mb-5">
                        <figure className="p-5">
                            <img src={buyers} alt="" className="rounded" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/buyers/getting-started'>
                            <small className="card-title pb-2 text-primary  hover:underline">Buyers</small>
                        </Link>
                        <small>My company posts work on Field Nation.</small>
                    </div>
                </div>
            </div>
            {!window.location.href.includes('/providers' || 'service_companies' || 'buyers') &&
                <Case></Case>
            }
        </div>
    );
};

export default User;
