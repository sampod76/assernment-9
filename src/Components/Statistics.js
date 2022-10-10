import React from 'react';
import { useLoaderData } from 'react-router-dom';

import {
    BarChart, XAxis, YAxis, Bar
} from 'recharts';
import Quiz from './Quiz';

const Statistics = () => {
    const getQuizData = useLoaderData().data
    console.log(getQuizData)

    const data = getQuizData

    return (

        <div>

            <BarChart width={500} height={500} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="total"></YAxis>
                <Bar dataKey="total" fill='red'></Bar>
            </BarChart>
        </div>

    );
};

export default Statistics;