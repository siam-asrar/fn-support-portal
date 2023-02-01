import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Additional from '../Home/Banner/Additional/Additional';
import About from '../Home/About/About';
import Banner from '../Home/Banner/Banner';
import Resources from '../Home/Resources/Resources/Resources';
import Loader from '../Shared/Loader/Loader';

const Providers = () => {
    const resources = useLoaderData();
    const url = window.location.pathname.split('/').pop();
    const selected = resources.filter(resource => resource.name.includes(url)).shift().items;
    const { loading } = useContext(AuthContext);

    const menuItems = [
        { id: 1, label: 'Getting Started', name: 'getting-started' },
        { id: 2, label: 'Using Field Nation', name: 'using-field-nation' },
        { id: 3, label: 'How To Videos', name: 'how-to-videos' },
        { id: 4, label: 'Quick Tips and Tricks', name: 'quick-tips-and-tricks' },
        { id: 5, label: 'Payments', name: 'payments' },
        { id: 6, label: 'Agreements', name: 'agreements' },
        { id: 7, label: 'Field Nation Pro', name: 'field-nation-pro' },
    ];

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Banner></Banner>
            <div className='light:bg-light dark:bg-dark border shadow-lg mb-5 p-5'>
                <h1 className="text-2xl font-light leading-none text-start sm:text-4xl">Provider Resources</h1>
            </div>
            <div className='shadow-lg border'>
                <ul className='menu menu-horizontal light:bg-light dark:bg-dark flex justify-start m-5 p-5 divide divide-gray-400'>
                    {
                        menuItems.map(menuItem =>
                            <li className="border border-gray-400 font-semibold text-gray-500 hover:text-primary hover:bg-gray-200" key={menuItem.id}>
                                <NavLink to={`/providers/${menuItem.name}`} style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? 'lightGray' : 'inherit',
                                        borderRadius: '0',
                                        color: isActive ? 'blue' : 'inherit',
                                    };
                                }}>
                                    <small>{menuItem.label}</small>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
                <ul className='light:bg-light dark:bg-dark block divide divide-gray-200 text-start mt-5'>
                    {
                        selected.map(selects =>
                            <li className="font-semibold text-gray-500 hover:text-primary hover:bg-gray-200 border-x border-t border-gray-200 p-5">
                                <small className='p-5'>{selects.name}</small>
                            </li>
                        )
                    }
                </ul>
            </div>
            <Resources></Resources>
            <Additional></Additional>
            <About></About>
        </div >
    );
};

export default Providers;
