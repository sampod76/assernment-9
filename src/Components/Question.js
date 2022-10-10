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
        <div className='border-2 border-slate-800 my-2 text-justify p-3 '>
           <div className=' flex justify-between'>
           <h1>Quiz {index+1} {name}</h1>
           <h1><FontAwesomeIcon onClick={handelAnswer} icon={faEye} /></h1>
           </div>
            
            <div>
         {
            options.map((ans,index) => <li key={index} ans={ans}>{ans}</li>)
         }
            </div>
        </div>
    );
};

export default Question;