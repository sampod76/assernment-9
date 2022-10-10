import React from 'react';
import { useLoaderData } from 'react-router-dom';

import {
    BarChart, XAxis, YAxis, Bar
} from 'recharts';
import Quiz from './Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Statistics = () => {
    const getQuizData = useLoaderData().data
    // console.log(getQuizData)

    const data = getQuizData

    return (

        <div>
            <h1 className='button mt-5'>Recharts For the full stack developer course Quiz</h1>
            <h1 className='text-5xl text-center'> <FontAwesomeIcon icon={faArrowDown} /></h1>

            <BarChart width={500} height={500} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="total"></YAxis>
                <Bar dataKey="total" fill='green'></Bar>
            </BarChart>
        </div>

    );
};

export default Statistics;