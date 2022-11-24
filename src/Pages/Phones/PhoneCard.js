import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PhoneCard = ({ phone }) => {
    const { user } = useContext(AuthContext);
    const { name: seller, model, productPhoto, resalePrice, originalPrice, condition, contactInfo, location, purchaseYear, yearsUsed, description } = phone;

    const handleSubmit = () => {
        toast.success(`Booking successful for ${model}`);
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={productPhoto} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title mr-5">{model}</h2>
                <div>
                    <small className='mr-2 font-semibold'>Phone# {contactInfo}</small>
                    <small className='mr-2 font-semibold'>Seller:  {seller}</small>
                    <small className='mr-5 font-semibold'>Used: {yearsUsed} yrs</small>
                </div>
                <div className='flex'>
                    <small className='mr-3'><p>Condition: {condition}</p></small>
                    <small className='mr-3'><p>Location: {location}</p></small>
                    <small><p>Purchased: {purchaseYear}</p></small>
                </div>
                <div>
                    <small className='mr-5 font-semibold'>Price: tk.{resalePrice}</small>
                    <small className='mr-5 font-semibold'>Original Price: tk.{originalPrice}</small>
                </div>
                <div className="card-actions items-center justify-start">
                    <p>{description}</p>
                    <label htmlFor="booking-modal"
                        className="btn btn-primary dark:text-gray-90"
                    >Book Now
                    </label>
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-gray-800">
                            <h3 className="font-bold text-lg mb-10">Please confirm the booking for {model}:</h3>
                            <div className="mb-2">
                                <label
                                    htmlFor="name"
                                    className="block text-start text-sm font-semibold text-white"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Your Name'
                                    className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                    defaultValue={user?.displayName}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-start text-sm font-semibold text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='xxx@xxx.com'
                                    className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                    defaultValue={user?.email}
                                    readOnly
                                />
                            </div>
                            <label
                                htmlFor="model"
                                className="text-start block text-sm font-semibold text-white"
                            >
                                Phone model
                            </label>
                            <input
                                type="text"
                                name='model'
                                placeholder='Phone model'
                                className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                defaultValue={model}
                                readOnly

                            />
                            <div className="mb-2 mt-6">
                                <label
                                    htmlFor="resalePrice"
                                    className="text-start block text-sm font-semibold text-white"
                                >
                                    Resale price
                                </label>
                                <input
                                    type="number"
                                    name='resalePrice'
                                    placeholder='Resale price'
                                    className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                    defaultValue={resalePrice}
                                    readOnly
                                />
                            </div>
                            <div className="mb-2 mt-6">
                                <label
                                    htmlFor="contactInfo"
                                    className="text-start block text-sm font-semibold text-white"
                                >
                                    Contact Info
                                </label>
                                <input
                                    type="number"
                                    name='contactInfo'
                                    placeholder='Contact Info'
                                    className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>
                            <div className="mb-2 mt-6">
                                <label
                                    htmlFor="location"
                                    className="text-start block text-sm font-semibold text-white"
                                >
                                    Your Location
                                </label>
                                <input
                                    type="text"
                                    name='location'
                                    placeholder='Your Location'
                                    className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info focus:ring-info focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>
                            <div className="modal-action">
                                <label onClick={handleSubmit} htmlFor="booking-modal" className="btn btn-primary">Book it</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;