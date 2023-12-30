import Notes from "./notes";
import "./tools.css"
import { useState } from "react";

// const blog=[
//     {
//         title:"home is here",
//         content:"Home is where mom is so ya its true."
//     },{
//         title:"home is here",
//         content:"Home is where dad is so ya its true."
//     }
// ]
const blog=[
    {
        name:"home is here",
        age:"Home is where mom is so ya its true."
            },
]
function Notesagaindemo(){
    let second=blog[0];
//    content states
    const [notes,setNotes]=useState("content-show");
    const [yournotes,Setyournotes]=useState("content-hide")
    const [publish,setpublish]=useState("content-show")
    const [show,setShow]=useState("content-hide");

// notes section mapping array
    const [objects, setObjects] = useState([]);
    const [inputValues, setInputValues] = useState({
        name: '',
        age: ''
      });
      const addObject = (e) => {

        // create a new object with input values
        const newObj = {
          name: inputValues.name,
          age: inputValues.age
        };

        // add the object to the array
        setObjects([...objects, newObj]);

        // clear the input fields
        setInputValues({
          name: '',
          age: ''
        });
        blog.push(objects);
        console.log(blog)
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
          ...inputValues,
          [name]: value
        });
      };
    
    
    // const notesobj=
    //     {
    //         title:val,
    //         content:contentitem
    //     }
    
    const open=()=>{
        // setShow("content-show")
        show==="content-show"?setShow("content-hide"):setShow("content-show")
    }
    const comp=()=>{
        setNotes("content-hide")
        setpublish("content-show")
    }
    const noComp=()=>{
        setNotes("content-show");
        setpublish("content-hide");
        Setyournotes("content-show")
    }
    // const handleClick = () => {
    //     // 👇️ push an object to the end of the state array
    //     myarray.push(notesarray);
    //     console.log(myarray)
    // }
   
    return(
        <>
<div className="block sm:block lg:flex md:block sm:block xl:flex">
        <div className="sidebar-1">
        <div className="mb-2 p-4">
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">Notes</h5>
            </div>
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
    <div onClick={comp} role="button" tabindex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
       +
      </div>
      Add Notes
    </div>
    <div onClick={noComp} role="button" tabindex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
        </svg>
      </div>Your Notes
    </div>
  </nav>
        </div>
        {/* first div ended */}
        <div className={`w-full ${publish}`}>
<div className=" bg-white shadow p-4 py-8">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">New Notes</div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" 
            value={inputValues.name} name="name"
            onChange={handleInputChange}></input>
            <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Write your notes here!" 
            value={inputValues.age} name="age"
            onChange={handleInputChange}></textarea>

            
            <div className="icons flex text-gray-500 m-2">
                <div className="count ml-auto text-gray-400 text-xs font-semibold">{inputValues.age.length}/300</div>
            </div>
            
            <div onClick={addObject} className="buttons flex justify-end">
                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Add</div>
            </div>
        </div>
    </div>

</div>
        {/* second div started */}
    <div className={`${notes} ${yournotes}`}>
        
        {/* {blog.map((blog)=><div><h4>{blog.title}</h4><p>{blog.content}</p></div>
        )} */}
    {blog.map((obj,index)=> <div className={`item clicker px-6 py-6 `} x-data="{isOpen : false}" onClick={open}>
                <a className="flex items-center justify-between no-underline" >
                    <h4 >{obj.name}</h4>
                    <svg 
                    
                    className="w-5 h-5 text-gray-500"
                        fill="none" stroke-linecap="round" 
                        stroke-linejoin="round" stroke-width="2" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                <div x-show="isOpen"  className={`mt-3 content ${show}`}>
                    <p>{obj.age}</p>
                </div>
            </div>)}
            {objects.length===0?<p>No Notes</p>:""}
            
    </div>
{/* second div ended */}
{/* third div started */}


</div> 


        </>
    )
}
export default Notesagaindemo;







   



