import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Main from './Components/Main';
import Error from './Components/Error';
import Header from './Components/Header';
import Home from './Components/Home';
import Course from './Components/Course';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/courses',
          loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/courses/:quizId',
          loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Course></Course>
        },
        {
          path:'/statistics',
          loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }

      ]
      
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ])
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
