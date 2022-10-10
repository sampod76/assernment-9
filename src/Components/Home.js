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
                <div className=' flex'>
                    <img className=' w-10 mx-auto mt-3 ' src="https://i.ibb.co/Wf7xMfJ/css3-alt.png" alt="css3-alt" border="0" />
                    <img className=' w-10 mx-auto mt-3 ' src="https://i.ibb.co/vPwSkYV/github.png" alt="github" border="0" />
                    <img className=' w-10 mx-auto mt-3 ' src="https://i.ibb.co/ftp4742/js.png" alt="js" border="0" />
                    <img className=' w-10 mx-auto mt-3 ' src="https://i.ibb.co/tsHrkmf/react.png" alt="react" border="0" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4'>
                {
                    getQuizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;