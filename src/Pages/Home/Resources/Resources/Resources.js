import React from 'react';
import providers from '../../../../assets/icons/providers.png';
import buyers from '../../../../assets/icons/buyers.png';
import service_companies from '../../../../assets/icons/service_companies.png';
import { Link } from 'react-router-dom';
import Case from '../Case/Case';
import Additional from '../Additional/Additional';

const User = () => {
    const homePage = !(window.location.href.includes('providers') || window.location.href.includes('service_companies') || window.location.href.includes('buyers'));
    const menuItems = [
        { id: 1, label: 'Providers', name: 'providers', desc: 'I am a technician who is performing work at Field Nation.', img: providers },
        { id: 2, label: 'Service Companies', name: 'service_companies', desc: 'A group of technicians performing work on Field Nation.', img: service_companies },
        { id: 3, label: 'Buyers', name: 'buyers', desc: 'My company posts work on Field Nation.', img: buyers },
    ];

    return (
        <>
            <div className='border shadow pt-5 mx-auto mt-5'>
                <h1 className="text-2xl font-serif leading-none text-center">Resources</h1>
                <div className='lg:flex lg:justify-center md:block md:px-10'>
                    {
                        menuItems.map(menuItem =>
                            <div className="lg:w-64 px-2 lg:h-32 md:w-full md:mx-auto md:my-5 md:py-3 border rounded-none border-t-indigo-700 border-t-2 shadow-xl lg:mx-1" key={menuItem.id}>
                                <figure>
                                    <img src={menuItem.img} alt="" className="rounded mx-auto" style={{ height: '25px' }} />
                                </figure>
                                <Link to={`/${menuItem.name}/getting-started`} className="text-lg text-secondary hover:underline">
                                    <small>{menuItem.label}</small>
                                </Link>
                                <br />
                                <i className='text-sm font-serif'><small>{menuItem.desc}</small></i>
                            </div>
                        )
                    }
                </div>
                {homePage &&
                    <Case></Case>
                }
            </div>
            {homePage &&
                <Additional></Additional>
            }
        </>
    );
};

export default User;