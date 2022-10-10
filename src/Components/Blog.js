import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='my-2 hover:bg-sky-500 hover:text-white p-5'>
                <h1 className='h1'>1) what is the purpose of react router?</h1>
                <div className='p'>
                    <h1><span className='underline '>Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL </h1>
                </div>
            </div>
            <div className='my-2 hover:bg-sky-500 hover:text-white p-5'>
                <h1 className='h1 '>2)How does context api work ?</h1>
                <div className='p'>
                    <h1><span className='underline '>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </h1>
                </div>
            </div>
            <div className='my-2 hover:bg-sky-500 hover:text-white p-5'>
                <h1 className='h1 '>3) what is useref in react?</h1>
                <div className='p'>
                    <h1><span className='underline '>Ans:</span> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.  </h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;