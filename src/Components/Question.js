import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { RightAnswer, WrongAnswer } from './Course';


const Question = ({ question, index }) => {
    const { question: name, correctAnswer, options } = question
    const [isActive, setIsActive] = useState(true);
    const [right, setRight]=useContext(RightAnswer)
    const [wrong,setWrong]=useContext(WrongAnswer)
    
    const handelAnswer = () => {
        Swal.fire(
            'The quiz right answer',
            `${correctAnswer}`
        )
    }
    const handelRightAnswer =(ans,name)=>{

    if(ans === correctAnswer){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You are select Right answer',
            showConfirmButton: false,
            timer: 1500
          })
          setIsActive(true);

          const rightFound=right.find(ri=>correctAnswer==ri)
       
          if(!rightFound){
            const rest =[...right,correctAnswer]
            setRight(rest)
          }
     
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are select wrong answer!',
            
          })
          setIsActive(false);

          const wrongFound=wrong.find(wro=>wro==name)
          if(!wrongFound){
            const rest =[...wrong,name]
            setWrong(rest)
          }
    }

    }

    // console.log(question)
    return (
        <div className='rounded-lg my-5 text-justify p-5 bg-slate-100 shadow-xl'>
            <div className=' flex justify-between text-xl font-semibold '>
                <h1 className='w-[90%]'>Quiz {index + 1} {name}</h1>

                <h1 className=''><FontAwesomeIcon onClick={handelAnswer} icon={faEye} /></h1>
            </div>

            <div className='text-left p-5 cursor-pointer'>
                {
                    options.map((ans, index) => <li 
                    onClick={()=>handelRightAnswer(ans,name)}
                    className={`capitalize p-2 my-2 rounded-lg text-white hover:bg-blue-700 hover:text-white hover:rounded-lg ${isActive ? 'bg-green-800' : 'bg-red-700'}`}
                    key={index}
                    ans={ans}>
                        {ans}
                    
                    
                    
                    </li>)
                }
            </div>
        </div>
    );
};

export default Question;