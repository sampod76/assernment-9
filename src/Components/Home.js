import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {
    const getQuizs = useLoaderData().data
    // console.log(getQuiz)
    return (
        <div>
            <div className=' bg-cyan-200 p-5 my-3 rounded-lg text-2xl font-semibold shadow-xl '>
                <h1>All the courses to be Full Stack Development will be found here</h1>
            </div>
            <div className='grid grid-cols-3 gap-2 my-4'>
                {
                    getQuizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;