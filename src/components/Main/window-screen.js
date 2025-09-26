import AppLayout from "./web";
import { useState, useEffect } from "react";
import Footer from "../../footer/footer";
import pp from "../../assets/images/profile.jpg"
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./demo.css"



const skills=[
  {skill:"HTML5",color:"rose-600/20",key:"1"},
  {skill:"CSS3",color:"indigo-700/20",key:"2"},
  {skill:"Bootstrap",color:"rose-600/20",key:"3"},
  {skill:"TailwindCSS",color:"indigo-700/20",key:"4"},
  {skill:"JavaScript",color:"rose-600/20",key:"5"},
  {skill:"ReactJS",color:"indigo-700/20",key:"6"},
  {skill:"NodeJS",color:"rose-600/20",key:"7"},
  {skill:"ExpressJS",color:"indigo-700/20",key:"8"},
  {skill:"JQuery",color:"rose-600/20",key:"9"},
  {skill:"MongoDB",color:"indigo-700/20",key:"10"},
  {skill:"MySQL",color:"rose-600/20",key:"11"},
  {skill:"TypeScript",color:"indigo-700/20",key:"12"},
  {skill:"Git",color:"rose-600/20",key:"13"},

]

function Screen(props){
 
  const [back,setBack]=useState('bg1')
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);

  const [showContact, setShowContact] = useState(false);
 
  const contactClose = () => setShowContact(false);
  const contactShow = () => setShowContact(true);

  const contactFunction=()=>{
    handleClose()
    contactShow()
  }
  const aboutFunction=()=>{
   handleShow()
    contactClose()
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
const bg=["bg1","bg2","bg3","bg4","bg5"];
const changeBg=()=>{
  var rand=Math.random()*6
  var exact=Math.floor(rand)
  if (exact>5?setBack(bg[0]):setBack(bg[exact]));
  if(bg[exact]===undefined?setBack(bg[0]):setBack(bg[exact]))
      setBack(bg[exact])
}
  const [val,setval]=useState('hide')
  const [Xval,setXval]=useState('')
  const [Yval,setYval]=useState('')
  
  useEffect(() => {
    const handleContextMenu = (event) => {
      setval("show");
      setXval(event.clientX);
      setYval(event.clientY);
      event.preventDefault();
    };

    const handleClick = () => {
      setval("hide");
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const reload = () => {
    window.location.reload();
  };




  // for weather
  let latitude=props.lat;
  let longitude=props.log;

    return(
        <>

<Modal dialogClassName='model' style={{padding:"0",margin:"0"}} show={showProject} onHide={handleClose} className='special_modal_about'>
  
            <div className="py-8 mt-8">
                <div role="alert" className="container mx-auto mt-10 w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-[#211F26] dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
                        <div className="flex flex-col items-center px-4 md:px-12">
                          
                            <img
                  src={pp} alt="Omkar Jadhav" className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"></img>
                             <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">Omkar
                  Jadhav</p>
                  <p class="mt-1.5 text-base leading-relaxed text-center text-white opacity-80">Full Stack Web Developer</p>
                            <div className="flex items-center mt-4 sm:mt-6 w-full">
                              
                                <div className="flow-root">
  <dl className="-my-5 divide-y divide-gray-100 text-sm">

    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-white">Skills :</dt>
      <dd className="text-gray-700 sm:col-span-2">
      
      {skills.map((skil)=><span className={`
      bg-rose-600/20 border-0 leading-none appearance-none inline-flex items-center rounded-md py-1 px-3 mr-2 text-[0.9375rem] mb-1 text-white`}>{skil.skill}</span>)}
      
      </dd>
    </div>
  </dl>
</div>
                            </div>
                            <button className="w-full py-2 lmao-glass rounded-md" onClick={contactFunction}>Contact me</button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClose}>
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
</Modal>
<Modal dialogClassName='model' style={{padding:"0",margin:"0"}} show={showContact} onHide={contactClose} className='special_modal_about'>
  
            <div className="py-8 mt-8">
                <div role="alert" className="container mx-auto mt-10 w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-[#211F26] dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
                        <div className="flex  items-center px-6 md:px-12">
                          
                            <img
                  src={pp} alt="Omkar Jadhav" className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-6 ml-auto rounded-full shadow-xl"></img>
                             <div>
                             <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-2xl">Omkar
                  Jadhav</p>
                  <p className="-mt-1 text-base leading-relaxed text-center text-white opacity-80 text-sm">Full Stack Web Developer</p>
                  </div> 
                        </div>

                        <div className="mt-3">


                        <section className="socials text-center">
  <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-5xl">

    <ul className="socials__btns flex justify-center items-center gap-3 lg:gap-5 flex-wrap">
    <li>
        <a href="https://www.instagram.com/omkar_jadhav_ninja/" target="_blank" rel="noopener noreferrer">
          <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 32 32"><title>Follow Me on Instagram</title><path d="M16,3.7c4,0,4.479.015,6.061.087a6.426,6.426,0,0,1,4.51,1.639,6.426,6.426,0,0,1,1.639,4.51C28.282,11.521,28.3,12,28.3,16s-.015,4.479-.087,6.061a6.426,6.426,0,0,1-1.639,4.51,6.425,6.425,0,0,1-4.51,1.639c-1.582.072-2.056.087-6.061.087s-4.479-.015-6.061-.087a6.426,6.426,0,0,1-4.51-1.639,6.425,6.425,0,0,1-1.639-4.51C3.718,20.479,3.7,20.005,3.7,16s.015-4.479.087-6.061a6.426,6.426,0,0,1,1.639-4.51A6.426,6.426,0,0,1,9.939,3.79C11.521,3.718,12,3.7,16,3.7M16,1c-4.073,0-4.584.017-6.185.09a8.974,8.974,0,0,0-6.3,2.427,8.971,8.971,0,0,0-2.427,6.3C1.017,11.416,1,11.927,1,16s.017,4.584.09,6.185a8.974,8.974,0,0,0,2.427,6.3,8.971,8.971,0,0,0,6.3,2.427c1.6.073,2.112.09,6.185.09s4.584-.017,6.185-.09a8.974,8.974,0,0,0,6.3-2.427,8.971,8.971,0,0,0,2.427-6.3c.073-1.6.09-2.112.09-6.185s-.017-4.584-.09-6.185a8.974,8.974,0,0,0-2.427-6.3,8.971,8.971,0,0,0-6.3-2.427C20.584,1.017,20.073,1,16,1Z"></path><path d="M16,8.3A7.7,7.7,0,1,0,23.7,16,7.7,7.7,0,0,0,16,8.3ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"></path><circle cx="24.007" cy="7.993" r="1.8"></circle></svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/omkar-jadhav-a09878249/" target="_blank" rel="noopener noreferrer">
          <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455"  >
            <title>Follow Me on Linkedin</title>
            <g >
              <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z"></path>
              <circle cx="24.007" cy="7.993" r="1.8"></circle>
              <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"></path>
              
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/omkarjadhavninj" target="_blank" rel="noopener noreferrer">
          <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 32 32"><title>Follow Me on Twitter</title><g><path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"></path></g></svg>
        </a>
      </li>

      {/* <li>
        <a href="#0" target="_blank">
          <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 32 32"><title>Follow us on Facebook</title><path d="M32,16A16,16,0,1,0,13.5,31.806V20.625H9.438V16H13.5V12.475c0-4.01,2.389-6.225,6.043-6.225a24.644,24.644,0,0,1,3.582.312V10.5H21.107A2.312,2.312,0,0,0,18.5,13v3h4.438l-.71,4.625H18.5V31.806A16,16,0,0,0,32,16Z"></path></svg>
        </a>
      </li> */}

      <li>
        <a href="https://www.youtube.com/channel/UCxK9EwHKXYPzjeD3GnXogEg" target="_blank" rel="noopener noreferrer">
          <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0" viewBox="0 0 32 32"><title>Subscribe Me on Youtube</title><path d="M31.7,9.6c0,0-0.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4C22.7,4.7,16,4.7,16,4.7h0c0,0-6.7,0-11.2,0.3 c-0.6,0.1-2,0.1-3.2,1.4c-1,1-1.3,3.2-1.3,3.2S0,12.2,0,14.8v2.4c0,2.6,0.3,5.2,0.3,5.2s0.3,2.2,1.3,3.2c1.2,1.3,2.8,1.2,3.5,1.4 C7.7,27.2,16,27.3,16,27.3s6.7,0,11.2-0.3c0.6-0.1,2-0.1,3.2-1.4c1-1,1.3-3.2,1.3-3.2s0.3-2.6,0.3-5.2v-2.4 C32,12.2,31.7,9.6,31.7,9.6z M12.7,20.2l0-9l8.6,4.5L12.7,20.2z"></path></svg>
        </a>
      </li>
    </ul>
  </div>
</section>
                        </div>
                        <div>

                        <div className="flow-root mb-4 mt-4">
  <dl className="-my-3  text-sm ">
    <div className="grid grid-cols-3 gap-1 py-1.5 sm:grid-cols-3 sm:gap-1 ">
      <dt className="font-medium text-slate-100 text-right">Phone</dt>
      <dd className="text-gray-700 sm:col-span-2 "><a className="pl-2 no-underline text-slate-200" href="tel:+917892264908">+91&nbsp;7892264908</a></dd>
    </div>
    <center>
    <span className="flex items-center w-3/4">
  <span className="h-px flex-1 bg-white opacity-50"></span>
  <span className="h-px flex-1 bg-white opacity-50"></span>
</span>
    </center>
    
    <div className="grid grid-cols-3 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-slate-100 text-right">Mail</dt>
      <dd className="text-gray-700 sm:col-span-2"><a className="pl-2 no-underline text-slate-200" href="mailto:ojadhav250@gmail.com">ojadhav250@gmail.com</a></dd>
    </div>

    <center>
    <span className="flex items-center w-3/4">
  <span className="h-px flex-1 bg-white opacity-50"></span>
  <span className="h-px flex-1 bg-white opacity-50"></span>
</span>

    </center>
    <div className="grid grid-cols-3 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-slate-100 text-right">OldSite</dt>
      <dd className="text-gray-700 sm:col-span-2"><a target="_blank" rel="noopener noreferrer" className="pl-2 no-underline text-slate-200" href="https://omkarjninja.github.io/OmkarJ/">Old Portfolio</a></dd>
    </div>
  </dl>
</div>

                        </div>
                        <center>
                        <button className="w-3/4 py-2 px-2 lmao-glass rounded-md" onClick={aboutFunction}>About Me</button>
                        </center>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={contactClose}>
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
</Modal>





        {/* <RightMenu></RightMenu> */}
        {/* <div className={`menu ryt ${val}`} style={{position:"absolute",top:Yval,left:Xval}}>
                <p onClick={changeBg} style={{cursor:"pointer"}}>Change Background</p>
                <p onClick={reload} style={{cursor:"pointer"}}>Reload</p>
                <p onClick={toggleFullScreen} style={{cursor:"pointer"}}>View FullScreen</p>
                <p onClick={handleShow} style={{cursor:"pointer"}}>About</p>
            </div> */}

            <div
  className={`menu ryt ${val} flex flex-col bg-white/10 backdrop-blur-md rounded-md shadow-lg border border-white/20 z-10`}
  style={{
    position: "absolute",
    top: Yval,
    left: Xval,
    minWidth: "180px",
    zIndex: 9999,
  }}
>
  {[
    { label: "Change Background", onClick: changeBg },
    { label: "Reload", onClick: reload },
    { label: "View FullScreen", onClick: toggleFullScreen },
    { label: "About", onClick: handleShow },
  ].map((item, index) => (
    <p
      key={index}
      onClick={item.onClick}
      className="px-4 py-2 cursor-pointer hover:bg-white/20 hover:scale-100 hover:z-0 transition-all duration-150 text-gray-600 text-sm select-none"
    >
      {item.label}
    </p>
  ))}
</div>

        
          <div className={`windows-bg ${back}`}>

          <AppLayout lat={latitude} log={longitude}></AppLayout>
          <Footer lat={latitude} log={longitude}></Footer>
          </div>
          
        </>
    )
}
export default Screen;