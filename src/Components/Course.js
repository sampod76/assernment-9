import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export const RightAnswer = createContext(0)
export const WrongAnswer = createContext(0)

const Course = () => {
    const getCoursData = useLoaderData()
    const { name, total, logo, questions } = getCoursData.data
    const [right, setRight] = useState([])
    const [wrong, setWrong] = useState([])

    // console.log(getCoursData)
    return (
        <RightAnswer.Provider value={[right, setRight]}>
            <WrongAnswer.Provider value={[wrong, setWrong]}>

                <div className=''>
                  
                        <div className='grid md:grid-cols-3 sticky top-0 my-2 gap-1'>
                            <h1 className=' bg-cyan-200 p-1 md:p-5   rounded-lg text-base mt-0 sm:mt-2 md:text-2xl font-semibold shadow-xl  '>Quiz for : {name}</h1>
                            <h1 className=' bg-cyan-200 p-1 md:p-5   rounded-lg text-base mt-0 sm:mt-2 md:text-2xl font-semibold shadow-xl  '>Right Quiz: {right.length}</h1> 
                            <h1 className='text-red-600 bg-cyan-200 p-1 md:p-5  rounded-lg text-base mt-0 sm:mt-2 md:text-2xl font-semibold shadow-xl  '>Wrong Quiz: {wrong.length}</h1></div>

                        <div>
                            <h1 className='bg-cyan-600 p-3 rounded-md text-gray-600 text-lg font-semibold '>Please solution this Quiz </h1>
                            <h1 className='text-5xl text-center'> <FontAwesomeIcon icon={faArrowDown} /></h1>
                        </div>
                  
                    <section className=''>
                        {
                            questions.map((question, index) => <Question key={question.id} question={question} index={index}></Question>)
                        }
                    </section>
                </div>
            </WrongAnswer.Provider>
        </RightAnswer.Provider>
    );
};

export default Course;