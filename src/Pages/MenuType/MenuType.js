import React, { useContext, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import About from '../Home/About/About';
import Banner from '../Home/Banner/Banner';
import Resources from '../Home/Resources/Resources/Resources';
import Loader from '../Shared/Loader/Loader';

const MenuType = () => {
    const resources = useLoaderData();
    const userType = window.location.pathname.split('/')[1];
    const url = window.location.pathname.split('/').pop();
    const selected = resources.filter(resource => resource.name.includes(url)).shift().items;
    const { loading } = useContext(AuthContext);
    const [dropDownUrl, setDropDownUrl] = useState('');

    const menuItems = [
        { id: 1, userType: ['buyers', 'providers', 'service_companies'], label: 'Getting Started', name: 'getting-started' },
        { id: 2, userType: ['buyers'], label: 'Configuring Your Account', name: 'configuring-your-account' },
        { id: 3, userType: ['buyers'], label: 'Workflow and Automation', name: 'workflow-and-automation' },
        { id: 4, userType: ['buyers'], label: 'Intelligence Reporting', name: 'intelligence-reporting' },
        { id: 5, userType: ['buyers'], label: 'Talent Sourcing and Vetting', name: 'talent-sourcing-and-vetting' },
        { id: 9, userType: ['providers', 'service_companies'], label: 'Quick Tips and Tricks', name: 'quick-tips-and-tricks' },
        { id: 10, userType: ['providers', 'service_companies'], label: 'Payments', name: 'payments' },
        { id: 11, userType: ['providers', 'service_companies'], label: 'Agreements', name: 'agreements' },
        { id: 12, userType: ['providers', 'service_companies'], label: 'Field Nation Pro', name: 'field-nation-pro' },
    ];

    const dropdownItem = [
        { id: 6, userType: ['buyers'], label: 'Payment, Funding, and Policies', name: 'payment-funding-and-policies' },
        { id: 7, userType: ['buyers', 'providers', 'service_companies'], label: 'Using Field Nation', name: 'using-field-nation' },
        { id: 8, userType: ['buyers', 'providers', 'service_companies'], label: 'How To Videos', name: 'how-to-videos' },
    ]

    const displayAbleMenus = menuItems.filter(menuItem => menuItem.userType.includes(userType));
    const dropdownMenus = dropdownItem.filter(menuItem => menuItem.userType.includes(userType));

    const handleSubmit = () => {
        const results = dropdownMenus.find(dropdownMenu => dropdownMenu.name.includes(url)).label;
        setDropDownUrl(results);
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <div className='bg-blend-lighten border shadow mb-5 px-10 pb-5 pt-10'>
                <h1 className="text-2xl font-serif leading-none text-start">{(userType === 'buyers' && 'Buyer') || (userType === 'providers' && 'Provider') || (userType === 'service_companies' && 'Service Company')} Resources</h1>
            </div>
            <div className='border'>
                <ul className='bg-blend-lighten flex justify-start m-5 px-5 py-1 w-full'>
                    {
                        displayAbleMenus.map(displayAbleMenu =>
                            <li className="font-sans hover:text-primary hover:bg-gray-200" key={displayAbleMenu.id}>
                                <NavLink to={`/${userType}/${displayAbleMenu.name}`} className=' border border-gray-300 p-2 shadow' style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? '#EEEEEE' : 'inherit',
                                        color: isActive ? '#4051b7' : 'inherit',
                                    };
                                }}>
                                    <small>{displayAbleMenu.label}</small>
                                </NavLink>
                            </li>
                        )
                    }
                    {
                        dropDownUrl ?
                            <li className="font-sans hover:text-primary hover:bg-gray-200">
                                <NavLink to={`/${userType}/${url}`} className='border border-gray-300 p-2 shadow' style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? '#EEEEEE' : 'inherit',
                                        color: isActive ? '#4051b7' : 'inherit',
                                        borderRadius: '0'
                                    };
                                }}>
                                    <small>{dropDownUrl}</small>
                                </NavLink>
                            </li> :
                            ''
                    }
                    <button className="dropdown flex items-center" tabIndex={0}>
                        <div className='block'>
                            <span className="font-sans hover:text-secondary text-center flex justify-center items-center px-2">
                                More
                                <svg className="fill-current -mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </span>
                            <ul className="w-max menu menu-compact dropdown-content bg-base-100 text-accent mt-2">
                                {dropdownMenus.map(dropdownMenu =>
                                    <li className="font-sans hover:text-primary hover:bg-gray-200" key={dropdownMenu.id} onClick={handleSubmit}>
                                        <NavLink to={`/${userType}/${dropdownMenu.name}`} className='border border-gray-300 shadow' style={({ isActive }) => {
                                            return {
                                                backgroundColor: isActive ? '#EEEEEE' : 'inherit',
                                                color: isActive ? '#4051b7' : 'inherit',
                                                borderRadius: '0'
                                            };
                                        }}>
                                            <small onClick={handleSubmit}>{dropdownMenu.label}</small>
                                        </NavLink>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </button>
                </ul>
                <ul className='bg-blend-lighten block text-start mt-5 border-t'>
                    {
                        selected.map(selects =>
                            <li className="hover:text-primary hover:bg-gray-200 p-5 border-y" key={selects.id}>
                                <small className='p-5 text-sm text-secondary'>{selects.name}</small>
                            </li>
                        )
                    }
                </ul>
            </div >
            <Resources></Resources>
            <About></About>
        </div>
    );
};

export default MenuType;