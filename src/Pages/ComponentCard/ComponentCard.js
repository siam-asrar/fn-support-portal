import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ComponentCard = () => {
    const componentName = window.location.href.split('/').pop().split(/%|20|-/).join(' ');

    const data = [
        {
            name: "Jan",
            salesforce: 50,
            jira: 24
        },
        {
            name: "Feb",
            salesforce: 98,
            jira: 13
        },
        {
            name: "Mar",
            salesforce: 200,
            jira: 98
        },
        {
            name: "Apr",
            salesforce: 39,
            jira: 98
        },
        {
            name: "May",
            salesforce: 48,
            jira: 18
        }
    ];
    return (
        <section className='lg:h-full'>
            <h1 className="text-2xl font-serif leading-none mt-5">{componentName}</h1>
            <p className='text-sm pt-5'>Number of Issues reported per month.</p>
            <ResponsiveContainer className='hover:text-orange-500 bg-blend-lighten mx-auto hover:shadow-md hover:border my-2' width={400} height={300}>
                <LineChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 35,
                        left: -15,
                        bottom: 5
                    }}
                    title={`Issue Insights: ${componentName}`}
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
        </section>
    );
};

export default ComponentCard;