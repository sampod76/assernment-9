import React from 'react';

const Quiz = ({ quiz }) => {
    const { logo, name } = quiz
    console.log(quiz)
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-3">
                <figure><img src={logo} alt="" /></figure>
               
                    <h2 className="card-title">{name}</h2>

                  
                        <button className="btn btn-primary ">Start Practice</button>
                  
                </div>
      
        </div>
    );
};

export default Quiz;