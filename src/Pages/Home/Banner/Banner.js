import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Banner = () => {

    const { user } = useContext(AuthContext);
    const userFirstName = user?.displayName.split(' ').slice(0, 1);

    return (
        <div className='flex justify-center'>
            <div className="hero border shadow-xl" style={{ backgroundImage: `url("https://fieldnation.com/wp-content/uploads/2022/07/field-ready-support.jpg")` }}>
                <div className="hero-overlay bg-opacity-70">
                </div>
                <div className="hero-content text-center text-neutral-content block">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there, <br /> {user ? userFirstName : ''}</h1>
                        <p className="my-5">Field Nation is the world’s most active Field Service Marketplace and software solution that connects companies and service professionals to get work done.</p>
                        <a href="https://app.fieldnation.com/signup" target="_blank rel=noreferrer">
                            <button className="btn btn-primary btn-wide hover:bg-secondary bg-primary">Sign Up</button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;