import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-200 p-3 shadow-xl rounded-lg'>
            <div>
                <NavLink to='/' className='text-xl font-bold text-green-800'>Quiz Bank</NavLink>
            </div>
            <div className='flex'>
            <NavLink to='/courses'  className={({ isActive }) =>
              isActive ? 'mx-2 underline decoration-cyan-500 decoration-4' : 'mx-2'
            }>Courses </NavLink>
            <NavLink  to='/statistics' className={({ isActive }) =>
              isActive ? 'mx-2 underline decoration-cyan-500 decoration-4' : 'mx-2'
            }>Statistics</NavLink>
            <NavLink  to='/blog' className={({ isActive }) =>
              isActive ? 'mx-2 underline decoration-cyan-500 decoration-4' : 'mx-2'
            }>Blog</NavLink>
           
            </div>
        </div>
    );
};

export default Header;