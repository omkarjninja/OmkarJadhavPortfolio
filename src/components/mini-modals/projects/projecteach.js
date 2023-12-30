import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
function ProjectEach(props){
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    props.ss1,props.ss2,props.ss3
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
 let chunk=1;
  const techy=[props.tech]
  // techy[0].slice(0, chunk)
  let second=techy[0];
  // const slices=techy.slice()
  // console.log(slices)

//  const sl=()=>{ slices.map((val,i)=>{<h1>{val[i]}</h1>})}
//  console.log(sl)
    return(
        <>
         <div style={{display:"flex",flexDirection:"column"}}>
        <div className='whole'>
        <img className='whole-img' src={props.icon} width="80px" height="80px" 
        style={{borderRadius:"10px",marginRight:"10px",marginBottom:"10px"}}></img>
        <div>
          <h3>{props.name}</h3>
          <p className='whole-para text-md'>{props.category}</p>
          <p className='whole-para'>{props.type}</p>
        </div>
        </div>

        <span className="flex items-center opacity-50">
  <span className="h-px flex-1 bg-white opacity-50"></span>
  {/* <span className="shrink-0 px-6"></span> */}
  <span className="h-px flex-1 bg-white opacity-50"></span>
</span>

        <div className="mt-2">
        <h2>About This Project</h2>
        <p>{props.date}</p>
        <p>{props.about}</p>
       </div>

       <span className="opacity-50 flex items-center ">
  <span className="h-px opacity-50 flex-1 bg-white"></span>
  {/* <span className="shrink-0 px-6"></span> */}
  <span className="h-px opacity-50 flex-1 bg-white"></span>
</span>

        <div className="mb-5">
          <h2 className='mt-2 mb-3'>Preview</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {/* <div className=" rounded-lg">
        <img src={props.ss1} style={{borderRadius:"10px",width:"450px",height:"200px",backgroundPosition:"center"}}></img>
        </div>
        <div className=" rounded-lg">
        <img src={props.ss2} style={{borderRadius:"10px",width:"450px",height:"200px",backgroundPosition:"center"}}></img>
        </div>
        <div className=" rounded-lg">
        <img src={props.ss3} style={{borderRadius:"10px",width:"450px",height:"200px",backgroundPosition:"center"}}></img>
        </div> */}

        {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          key={ index }
          style={{ borderRadius:"10px",width:"450px",height:"200px",backgroundPosition:"center"}}
          alt=""
        />
        ))}
        {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}

</div>
</div>
        {/* <img className='whole-img' src={props.screenshot} 
        style={{borderRadius:"10px",width:"500px",height:"200px",backgroundPosition:"center"}} /> */}
                <span className="opacity-50 flex items-center ">
  <span className="h-px opacity-50 flex-1 bg-white"></span>
  {/* <span className="shrink-0 px-6"></span> */}
  <span className="h-px opacity-50 flex-1 bg-white"></span>
</span>

<p className='mt-3 mb-3'>{props.more}</p>

<span className="opacity-50 flex items-center ">
  <span className="h-px opacity-50 flex-1 bg-white"></span>
  {/* <span className="shrink-0 px-6"></span> */}
  <span className="h-px opacity-50 flex-1 bg-white"></span>
</span>

<h2 className='mt-3'>Information</h2>
<div className="flow-root mt-3 ml-3 mb-3">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 bg-transparent sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-white">Website (Link)</dt>
      <dd className="text-gray-700 sm:col-span-2"><a href={props.link} target='_blank' style={{color:"#EEE7DA",cursor:"pointer"}}>{props.name}</a></dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 bg-transparent sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-white">Technologies Used :</dt>
      <dd className="text-gray-700 sm:col-span-2">
        <div class="flex gap-2 flex-wrap">
           {second.map((val)=>
           (
            <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-indigo-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
            <div class="mt-px">{val}</div>
          </div>
           )
           )
           }

            {/* <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
              <div class="mt-px">chip gradient</div>
            </div> */}
</div>


      </dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 bg-transparent sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-white">Uniqueness of Project</dt>
      <dd className="text-white opacity-70 sm:col-span-2">
        {props.unique}
      </dd>
    </div>
  </dl>
</div>








      </div>
        </>
    )
}
export default ProjectEach;

// {images.map((src, index) => (
//   <img
//     src={ src }
//     onClick={ () => openImageViewer(index) }
//     key={ index }
//     style={{ borderRadius:"10px",width:"450px",height:"200px",backgroundPosition:"center"}}
//     alt=""
//   />