import React from 'react';
import useTitle from '../../hooks/useTitle';

const ReportedItems = () => {
    useTitle('Reported Items');

    return (
        <section className='my-10'>
            <h2 className="text-5xl font-bold text-primary pb-2">Reported Items</h2>
        </section>
    );
};

export default ReportedItems;