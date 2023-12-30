import "./tools.css"
import { useState } from 'react';
const List =["Coding",];
function ToDo() {
  
  const [val,setval]=useState('');
  const ChangeHandler=(e)=>{
    if(val===""?alert('empty values'): List.push(val))
   setval('')
  }
  const goto=()=>{
    window.location.href="#list"
}
  return (
    <>
  <header>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-slate-200 sm:text-3xl">
          Welcome !
        </h1>

        <p className="mt-1.5 text-sm text-slate-300">
          Let's Create a New ToDoList 🎉
        </p>
      </div>
    </div>
  </div>
</header>
{/* input */}
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<label id='list'
  htmlFor="UserEmail"
  className="m-5 w-1/2 block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="text-xs font-medium text-slate-300"> To Do List </span>

  <input
    type="text"
    id="UserEmail"
    placeholder="Tasks"
    className="bg-white text-black mt-1 p-2 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    value={val} onChange={(e)=>setval(e.target.value)}
  />
</label>
{/* btn */}
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

{/* Base */}

{/* Border */}

<a
  className=" w-1/3 no-underline text-slate-200 m-5 group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-sky-700 focus:outline-none focus:ring active:bg-indigo-500"
  onClick={ChangeHandler}
>
  <span className=" font-medium transition-colors group-hover:text-white">
    Add Tasks
  </span>

  <span
    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
  >
    <svg
      className="h-5 w-5 rtl:rotate-180 bg-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        color="black"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>




    {/* main logic */}
        
        {List.map((hh)=>(
          <div className='hey2 w-1/2'>
          <input type='checkbox' className='h-6 m-5 cbox scale-90 sm:scale-100' />
          <h1 className='hi text-xl lg:text-5xl md:text-3xl sm:text-2xl m-5'>{hh}</h1>
          </div>
          
        ))}
        </>
  );
}

export default ToDo;
