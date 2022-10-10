import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Error = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Header></Header>
            <div className=' h-full'>
                <h1 className='text-7xl'>Sorry- 404</h1>
                <h1 className='bg-red-500 w-fit mx-auto mt-4 p-5 rounded-lg'>We could not find that page </h1>
                <div className='my-5'>
                <Link className='button' to='/'>Return Home Page</Link>
                </div>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Error;