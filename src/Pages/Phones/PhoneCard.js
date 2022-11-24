import React from 'react';

const PhoneCard = ({ phone }) => {
    const { name: seller, model, productPhoto, resalePrice, originalPrice, condition, contactInfo, location, purchaseYear, yearsUsed, description } = phone;

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
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;