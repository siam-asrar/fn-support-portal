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
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-gray-900">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content pt-10">
                        {userType === 'Admin' && <>
                            <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                            <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                            <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                        </>
                        }
                        {userType === 'Buyer' && <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        </>
                        }
                        {userType === 'Seller' && <>
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li><Link to="/dashboard/myProducts">My Products</Link></li>
                        </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;