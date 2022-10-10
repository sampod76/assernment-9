import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {
    const getQuizs=useLoaderData().data
    // console.log(getQuiz)
    return (
        <div className='grid grid-cols-3 gap-2 my-4'>
           {
            getQuizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
           }
        </div>
    );
};

export default Home;