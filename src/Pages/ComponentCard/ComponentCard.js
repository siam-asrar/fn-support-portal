import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ComponentCard = () => {
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
        <div className='h-full'>
            <h1 className="text-2xl font-serif leading-none p-5 mt-5">Components</h1>
            <ResponsiveContainer className='hover:text-orange-500  shadow bg-blend-lighten mx-auto pt-2' width={540} height={400} >
                <LineChart
                    data={data}
                    margin={{
                        top: 25,
                        right: 30,
                        left: 10,
                        bottom: 25,
                    }}
                    title='Component Insights'>
                    <CartesianGrid strokeDasharray='5 1' />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line strokeWidth={2} type="monotone" dataKey="jira" stroke="#8884d8" activeDot={{ r: 6 }} />
                    <Line strokeWidth={2} type="monotone" dataKey="salesforce" stroke="#82ca9e" activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
            <h1>These are details about specific components</h1>
        </div >
    );
};

export default ComponentCard;