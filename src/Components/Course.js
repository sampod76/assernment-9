import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Course = () => {
    const getCoursData = useLoaderData()
    const { name, total, logo, questions } = getCoursData.data

    console.log(getCoursData)
    return (
        <div>
            <div>
                <h1 className=' bg-cyan-200 p-5 my-3 rounded-lg text-2xl font-semibold shadow-xl w-fit mx-auto'>Course Name: {name}</h1>
            </div>
            <section className=''>
                {
                    questions.map((question,index)=><Question key={question.id} question={question} index={index}></Question>)
                }
            </section>
        </div>
    );
};

export default Course;