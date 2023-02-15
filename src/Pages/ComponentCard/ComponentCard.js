import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ComponentCard = () => {
    const componentName = window.location.href.split('/').pop().split(/%20/).join(' ');
    const components = useLoaderData();
    const currentComponent = components.filter(component => component.name).find(i => i.name.includes(componentName));
    const data = currentComponent.data;
    const about = currentComponent.about;

    return (
        <section className='lg:h-full'>
            <h1 className="text-2xl font-serif leading-none mt-5">{componentName}</h1>
            <p className='text-sm pt-5'>Number of Issues reported per month.</p>
            <ResponsiveContainer className='hover:text-orange-500 bg-blend-lighten mx-auto hover:shadow-md hover:border my-2' width={540} height={320}>
                <LineChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 35,
                        left: -15,
                        bottom: 5
                    }}
                    title={`${componentName}: Insights`}
                >
                    <CartesianGrid strokeDasharray='3 3' strokeOpacity={0.4} stroke="#4051b7" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Line strokeWidth={1.5} type="monotone" dataKey="jira" stroke="#8884d8" activeDot={{ r: 6 }} />
                    <Line strokeWidth={1.5} type="monotone" dataKey="salesforce" stroke="#2bd062" activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
            <p className='text-sm pt-5'>About this component</p>
            <p className='bg-blend-lighten w-1/3 px-10 py-5 hover:shadow-md hover:border mx-auto text-md font-serif italic leading-none my-2'>{`${componentName}: ${about}`}
            </p>
        </section>
    );
};

export default ComponentCard;