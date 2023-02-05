import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import About from '../Home/About/About';
import Banner from '../Home/Banner/Banner';
import Resources from '../Home/Resources/Resources/Resources';
import Loader from '../Shared/Loader/Loader';

const Users = () => {
    const resources = useLoaderData();
    const userType = window.location.pathname.split('/')[1];
    const url = window.location.pathname.split('/').pop();
    const selected = resources.filter(resource => resource.name.includes(url)).shift().items;
    const { loading } = useContext(AuthContext);

    const menuItems = [
        { id: 1, userType: ['buyers', 'providers', 'service_companies'], label: 'Getting Started', name: 'getting-started' },
        { id: 2, userType: ['buyers'], label: 'Configuring Your Account', name: 'configuring-your-account' },
        { id: 3, userType: ['buyers'], label: 'Workflow and Automation', name: 'workflow-and-automation' },
        { id: 4, userType: ['buyers'], label: 'Intelligence Reporting', name: 'using-field-nation' },
        { id: 5, userType: ['buyers'], label: 'Talent Sourcing and Vetting', name: 'talent-sourcing-and-vetting' },
        { id: 6, userType: ['buyers'], label: 'Payment, Funding, and Policies', name: 'payment-funding-and-policies' },
        { id: 7, userType: ['buyers', 'providers', 'service_companies'], label: 'Using Field Nation', name: 'using-field-nation' },
        { id: 8, userType: ['buyers', 'providers', 'service_companies'], label: 'How To Videos', name: 'how-to-videos' },
        { id: 9, userType: ['providers', 'service_companies'], label: 'Quick Tips and Tricks', name: 'quick-tips-and-tricks' },
        { id: 10, userType: ['providers', 'service_companies'], label: 'Payments', name: 'payments' },
        { id: 11, userType: ['providers', 'service_companies'], label: 'Agreements', name: 'agreements' },
        { id: 12, userType: ['providers', 'service_companies'], label: 'Field Nation Pro', name: 'field-nation-pro' },
    ];

    const displayAbleMenus = menuItems.filter(menuItem => menuItem.userType.includes(userType));

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <div className='bg-blend-lighten border shadow mb-5 px-10 pb-5 pt-10'>
                <h1 className="text-2xl font-serif leading-none text-start">{(userType === 'buyers' && 'Buyer') || (userType === 'providers' && 'Provider') || (userType === 'service_companies' && 'Service Companies')} Resources</h1>
            </div>
            <div className='border'>
                <ul className='nav bg-blend-lighten flex justify-start m-5 px-5 py-1 w-full'>
                    {
                        displayAbleMenus.map(displayAbleMenu =>
                            <li className="font-sans text-gray-500 hover:text-primary hover:bg-gray-200" key={displayAbleMenu.id}>
                                <NavLink to={`/${userType}/${displayAbleMenu.name}`} className=' border border-gray-300 p-2 shadow' style={({ isActive }) => {
                                    return {
                                        backgroundColor: isActive ? '#EEEEEE' : 'inherit',
                                        color: isActive ? '#4051b7' : 'inherit',
                                    };
                                }}>
                                    <small className=''>{displayAbleMenu.label}</small>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
                <ul className='bg-blend-lighten block text-start mt-5 border-t'>
                    {
                        selected.map(selects =>
                            <li className="hover:text-primary hover:bg-gray-200 p-5 border-y">
                                <small className='p-5 text-sm text-secondary'>{selects.name}</small>
                            </li>
                        )
                    }
                </ul>
            </div >
            <Resources></Resources>
            <About></About>
        </div >
    );
};

export default Users;