import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyProduct = ({ myProduct }) => {
    const { model, productPhoto, resalePrice, originalPrice, description } = myProduct;

    const navigate = useNavigate();

    const [myProducts, setMyProducts] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this phone?');
        if (proceed) {
            fetch(`http://localhost:4000/myProducts/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('serviceReview-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Phone deleted successfully')
                        const remaining = myProducts.filter(myProduct => myProduct._id !== id)
                        setMyProducts(remaining);
                        navigate('/dashboard');
                    }
                })
        }
    }

    if (myProduct.length === 0) {
        return <div className='pt-10 pb-20'>
            <section className='mb-20 pb-20'>
                <div className='mb-20 pb-20'>
                    <h2 className="text-5xl font-bold text-orange-600 pb-8">No Phones</h2>
                    <p className='font-bold mb-20 pb-20'>You can <Link to='/dashboard/addProduct' className="p-1 mx-2 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900 hover:bg-purple-600">Add a Phone</Link>from the Add Product section</p>
                </div>
            </section>
        </div>
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={productPhoto} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title mr-5">{model}</h2>
                <div>
                    <small className='mr-5 font-semibold'>Price: tk.{resalePrice}</small>
                    <small className='mr-5 font-semibold'>Original Price: tk.{originalPrice}</small>
                </div>
                <div className="card-actions items-center justify-start">
                    <p>{description}</p>
                    <button onClick={() => handleDelete(myProduct._id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;