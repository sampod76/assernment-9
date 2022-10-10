import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'
  import Swal from 'sweetalert2'

const Question = ({question, index}) => {
    const {question:name ,correctAnswer,options}=question
 const handelAnswer =()=>{
    Swal.fire(
        'The quiz right answer',
        `${correctAnswer}`
      )
 }

// console.log(question)
    return (
        <div className='rounded-lg my-5 text-justify p-5 bg-slate-100 shadow-xl'>
           <div className=' flex justify-between text-xl font-semibold '>
           <h1 className='w-[90%]'>Quiz {index+1} {name}</h1>
          
           <h1 className=''><FontAwesomeIcon onClick={handelAnswer} icon={faEye} /></h1>
           </div>
            
            <div className='text-left p-5'>
         {
            options.map((ans,index) => <li className='capitalize p-2 hover:bg-blue-700 hover:text-white hover:rounded-lg' key={index} ans={ans}>{ans}</li>)
         }
            </div>
        </div>
    );
};

export default Question;