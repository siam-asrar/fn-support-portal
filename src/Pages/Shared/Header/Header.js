import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaUser, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { CssBaseline, ThemeProvider, Switch } from '@mui/material';
import { dark, light } from '../../../theme/theme';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [hidden, setHidden] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const navigate = useNavigate();

    const mode = localStorage.getItem('fnSupport-mode-token');

    const handleDarkMode = (event) => {
        event.preventDefault();
        setDarkMode(!darkMode);
        darkMode ? localStorage.removeItem('fnSupport-mode-token') :
            localStorage.setItem('fnSupport-mode-token', 'true')
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
        navigate('/login');
    }

    const handleSearch = (event) => {
        event.preventDefault();

        const form = event.target;
        const search = form.search.value;

        if (!search.length) {
            return;
        } else {
            navigate(`/articles/${search}`);
        }
    }

    const menuItems = <>
        <li className='font-semibold hover:text-primary'><NavLink to={`/`} style={({ isActive }) => {
            return {
                backgroundColor: isActive ? 'transparent' : 'inherit',
                color: isActive ? '#4051FF' : 'inherit',
            };
        }}>
            Home
        </NavLink></li>
        {
            user?.email ?
                <li className='font-semibold hover:text-primary'><NavLink to={`/dashboard/components`} style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? 'transparent' : 'inherit',
                        color: isActive ? '#4051FF' : 'inherit',
                    };
                }}>
                    Dashboard
                </NavLink></li>
                :
                <li className='font-semibold hover:text-primary m-auto'><a href="https://fieldnation.com/how-it-works-for-businesses" target="_blank rel=noreferrer">Get a demo</a></li>
        }
    </>

    return (
        <ThemeProvider theme={mode ? dark : light}>
            <div className="grid grid-flow-col items-center content-center bg-orange-500 text-white px-2 max-h-7">
                <div className='flex justify-start items-center'>
                    <Switch size='small' color='default' onClick={handleDarkMode} title={`Dark Mode: ${mode ? 'On' : 'Off'}`} checked={mode ? true : false} />
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='h-4' src={logo} alt="" />
                    </Link>
                    <div className="hidden lg:flex justify-center items-center">
                        <ul className="menu menu-horizontal text-white">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {
                    !window.location.href.includes('/dashboard') &&
                    <div className="relative flex justify-center">
                        {
                            <>
                                <form className={`${hidden ? 'hidden' : ''} flex items-center`} onSubmit={handleSearch}>
                                    <input type="search" name="search" placeholder="Search keywords or topics" className="w-full h-5 m-2 px-5 text-sm rounded sm:w-96 focus:outline-none dark:bg-gray-200 dark:text-gray-900 focus:dark:bg-blue-100"
                                    />
                                    <button type="submit" className='absolute px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 fill-gray-500">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </form>
                                <button onClick={() => setHidden(!hidden)} type="submit" className="focus:outline-none">
                                    {hidden ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 fill-current text-white hover:text-primary">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                        :
                                        <p className='w-4 fill-current text-white hover:text-primary'>X</p>
                                    }
                                </button>
                            </>
                        }
                    </div>
                }
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-link bold text-white hover:text-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow text-gray-900 bg-white w-52">
                        {menuItems}
                    </ul>
                </div>
                {
                    window.location.href.includes('/dashboard') &&
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="text-white mx-3 hover:text-primary hover:text-lg lg:hidden">
                        <FaPowerOff></FaPowerOff>
                    </label>
                }
                <div className='flex justify-end items-center text-center'>
                    {
                        user?.uid ?
                            <label tabIndex={3} className='mb-1'>
                                {
                                    user?.photoURL ?
                                        <img
                                            style={{ height: '24px' }}
                                            className="rounded-full"
                                            src={user?.photoURL}
                                            alt={user?.displayName}
                                            title={user?.displayName} /> :
                                        user?.uid &&
                                        <FaUser
                                            className='rounded-full bg-white h-6 w-6'
                                            title={user?.displayName}>
                                        </FaUser>
                                }
                            </label>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn btn-ghost btn-sm mx-6 text-primary">Sign in</button>
                                </Link>
                                <Link to='/register'>
                                    <button className="btn btn-ghost btn-sm mx-6 text-secondary">Sign up</button>
                                </Link>
                            </>
                    }
                    <Link to='/login' onClick={handleLogOut} title='Log Out' className='font-semibold hover:text-primary rounded-full h-5 w-5 ml-3'>
                        <FaSignOutAlt></FaSignOutAlt>
                    </Link>
                </div>
            </div>
            <CssBaseline />
        </ThemeProvider>
    );
};

export default Header;