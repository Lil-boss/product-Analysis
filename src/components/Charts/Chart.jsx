import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='w-4/5 m-auto mt-20'>
            <div className='grid grid-cols-2 gap-12 p-5'>
                {/* LineChart */}
                <div>
                    <p className='text-center mb-5 text-2xl text-blue-400'>Month Wise sell</p>
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                        <XAxis dataKey="month" />
                        <YAxis dataKey="sell" />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>

                {/* BarChart */}
                <div>
                    <p className='text-center mb-5 text-2xl text-blue-400'>investment VS revenue</p>
                    <BarChart width={400} height={400} data={data} margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Legend />
                        <Tooltip />
                    </BarChart>
                </div>
                {/* AreaChart */}
                <div>
                    <p className='text-center mb-5 text-2xl text-blue-400'>investment VS revenue</p>
                    <AreaChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                {/* <PieChart */}
                <div>
                    <p className='text-center mb-5 text-2xl text-blue-400'>investment VS revenue</p>
                    <PieChart width={500} height={500}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;