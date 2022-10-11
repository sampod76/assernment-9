import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total,id } = quiz
    console.log(quiz)
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-3">
                <img className='bg-gray-400' src={logo} alt="" />
                <h2 className="card-title">{name}-Total Quiz: {total}</h2>
                <Link to={`/courses/${id}`} className="btn btn-primary ">Start Practice</Link>
            </div>

        </div>
    );
};

export default Quiz;