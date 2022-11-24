import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
        navigate('/login');
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 py-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='h-20 rounded-full pb-5' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <Link to='/login'>
                                <button onClick={handleLogOut} className="btn btn-outline btn-primary mx-6">Sign Out</button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn btn-outline btn-info mx-6">Sign in</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn btn-outline btn-success">Sign up</button>
                            </Link>
                        </>
                }
                {
                    user?.photoURL ?
                        <img
                            style={{ height: '40px' }}
                            className="rounded-full"
                            src={user?.photoURL}
                            alt={user?.displayName}
                            title={user?.displayName} /> :
                        user?.uid &&
                        <FaUser
                            className='rounded-full bg-white h-10 w-10'
                            title={user?.displayName}>
                        </FaUser>
                }
            </div>
        </div>
    );
};

export default Header;