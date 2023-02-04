import React from 'react';
import providers from '../../../../assets/icons/providers.png';
import buyers from '../../../../assets/icons/buyers.png';
import service_companies from '../../../../assets/icons/service_companies.png';
import { Link } from 'react-router-dom';
import Case from '../Case/Case';

const User = () => {
    return (
        <div className='bg-blend-hue border border-t-2 shadow-lg pt-5 mx-auto my-5'>
            <div className='bg-blend-lighten'>
                <h1 className="font-extralight leading-none text-center sm:text-4xl">Resources</h1>
                <div className='lg:flex lg:justify-center md:block md:px-10'>
                    <div className="lg:w-64 px-2 lg:h-32 md:w-full md:mx-auto md:my-5 md:py-3 border rounded-none border-t-indigo-700 border-t-2 shadow-xl lg:mx-2">
                        <figure>
                            <img src={providers} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/providers/getting-started' className="text-lg text-primary hover:underline">
                            <small>Providers</small>
                        </Link>
                        <br />
                        <i className='text-sm font-serif'><small>I am a technician who is performing work at Field Nation.</small></i>
                    </div>
                    <div className="lg:w-64 px-2 lg:h-32 md:w-full md:mx-auto md:my-5 md:py-3 border rounded-none border-t-indigo-700 border-t-2 shadow-xl lg:mx-2">
                        <figure>
                            <img src={service_companies} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/service_companies/getting-started' className="text-lg text-primary  hover:underline">
                            <small>Service Companies</small>
                        </Link>
                        <br />
                        <i className='text-sm font-serif'><small>A group of technicians performing work on Field Nation.</small></i>
                    </div>
                    <div className="lg:w-64 px-2 lg:h-32 md:w-full md:mx-auto md:my-5 md:py-3 border rounded-none border-t-indigo-700 border-t-2 shadow-xl lg:mx-2">
                        <figure>
                            <img src={buyers} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                        </figure>
                        <Link to='/buyers/getting-started' className="text-lg text-primary  hover:underline">
                            <small>Buyers</small>
                        </Link>
                        <br />
                        <i className='text-sm font-serif'><small>My company posts work on Field Nation.</small></i>
                    </div>
                </div >
                {!window.location.href.includes('/providers' || 'service_companies' || 'buyers') &&
                    <Case></Case>
                }
            </div>
        </div>
    );
};

export default User;
