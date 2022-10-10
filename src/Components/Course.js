import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Course = () => {
    const getCoursData = useLoaderData()
    const { name, total, logo, questions } = getCoursData.data

    console.log(getCoursData)
    return (
        <div>
            <div>
                <h1 className=' bg-cyan-200 p-5 my-3 rounded-lg text-2xl font-semibold shadow-xl w-fit mx-auto'>Course Name: {name}</h1>
               <div>
               <h1 className='bg-cyan-600 p-3 rounded-md text-white text-lg font-semibold'>Please solution this question</h1>
              <h1 className='h1 text-center'> <FontAwesomeIcon icon={faArrowDown} /></h1>
               </div>
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