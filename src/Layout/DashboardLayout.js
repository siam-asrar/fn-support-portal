import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';
import useType from '../hooks/useType';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    const [userType] = useType(user.email);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Header></Header>
                <Outlet></Outlet>
                <div className='sticky bottom-0'>
                    <Footer></Footer>
                </div>
            </div>
            <div className="drawer-side lg:bg-gray-900">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 text-white items-center pt-12 space-y-4 text-sm divide-y divide-gray-600 md:bg-gray-900 bg-gray-900">
                    {userType === 'Provider' && <>
                        <li className='flex justify-around items-center p-2 space-x-3 rounded-md'><Link to="/dashboard/">Reported Items</Link></li>
                    </>
                    }
                    {userType === 'Buyer' && <>
                        <li className='flex justify-around items-center p-2 space-x-3 rounded-md'><Link to="/dashboard/myReviews">My Reviews</Link></li>
                    </>
                    }
                    {userType === 'Admin' && <>
                        <li className='flex justify-around items-center p-2 space-x-3 rounded-md hover:text-lg'><Link to="/dashboard/components">Components</Link></li>
                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
