import React from 'react';
import styled from 'styled-components';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Container = styled.div`
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    h3 {
        padding: 10px 20px;
        color: #333;
    }
`;

const data = [
    {
        name: 'Thang 2',
        sales: 4000,
    },
    {
        name: 'Thang 2',
        sales: 3000,
    },
    {
        name: 'Thang 3',
        sales: 2000,
    },
    {
        name: 'Thang 4',
        sales: 2780,
    },
    {
        name: 'Thang 5',
        sales: 1890,
    },
    {
        name: 'Thang 6',
        sales: 2390,
    },
    {
        name: 'Thang 7',
        sales: 3490,
    },
    {
        name: 'Thang 8',
        sales: 1000,
    },
    {
        name: 'Thang 9',
        sales: 2000,
    },
    {
        name: 'Thang 10',
        sales: 4000,
    },
    {
        name: 'Thang 11',
        sales: 5000,
    },
    {
        name: 'Thang 12',
        sales: 3490,
    },
];
const Chart = () => {
    return (
        <Container>
            <h3>Biểu đồ theo dõi đơn hàng</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke='#333' />
                    <XAxis dataKey={'name'} stroke="#5550bd" />
                    <Line type="monotone" dataKey="sales" stroke="#5550bc" />
                    <Tooltip />
                    <YAxis stroke="#5550bd" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
};
export default Chart;
