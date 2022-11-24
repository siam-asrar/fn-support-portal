import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { FaTrash } from 'react-icons/fa';

const AllSellers = () => {
    useTitle('All Sellers');
    const type = useLoaderData();
    const sellers = type.filter(user => user.role === 'Seller');

    const navigate = useNavigate();
    const [remainingSellers, setRemainingSellers] = useState([]);

    const handleDelete = (id) => {
        console.log(id);

        const proceed = window.confirm('Are you sure that you want to delete this user?');

        if (proceed) {
            fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User deleted successfully');
                        const remaining = remainingSellers.filter(buyer => buyer._id !== id);
                        setRemainingSellers(remaining);
                        navigate('/dashboard');
                    }
                })

        }
    }

    return (
        <section className='my-10'>
            <h2 className="text-5xl font-bold text-primary pb-2">All Sellers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>                      <button onClick={() => handleDelete(seller._id)} className="btn btn-sm mt-1 ml-2 hover:bg-violet-800 rounded-full"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllSellers;