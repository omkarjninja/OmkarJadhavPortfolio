import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import "./projects.css"
import ProjectEach from './projects/projecteach';
function Pro(props){

  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  // if(props.name==="Spotify-Clone"){onclick={handleClose}}


    return(
      <>
      <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal_todo'>
       
         {/* <Modal.Title ><p className='text-2xl font-black' style={{cursor:"pointer"}} onClick={handleClose}>{'<'}</p></Modal.Title> */}
       
       <Modal.Body>
       <div className='hey'>
       <p className='text-2xl font-black' style={{cursor:"pointer"}} onClick={handleClose}>{'<'}</p>
         <button className='btn-x' onClick={handleClose}>
         <p className='text-white x'>x</p>
         </button>
          </div>
      <ProjectEach name={props.name} icon={props.icon} screenshot={props.scr} category={props.category} type={props.type}
      ss1={props.ss1} ss2={props.ss2} ss3={props.ss3} ss4={props.ss4} about={props.about} date={props.date} more={props.more}
      link={props.link} tech={props.tech} unique={props.unique}
      ></ProjectEach>
       </Modal.Body>
     </Modal>


       <div style={{display:"flex",flexDirection:"column"}} onClick={handleShow}>
        <div className='whole'>
        <img className='whole-img' src={props.icon} width="80px" height="80px" 
        style={{borderRadius:"10px",marginRight:"10px",marginBottom:"10px"}}></img>
        <div>
          <h6>{props.name}</h6>
          <p className='whole-para'>{props.category}</p>
          <p className='whole-para'>{props.type}</p>
        </div>
       
        </div>
        <div className='screenshot'>
          
        <img className='whole-img' src={props.screenshot} 
        style={{borderRadius:"10px",width:"500px",height:"200px",backgroundPosition:"center"}} />
        </div>
      </div>
      </>


       
    )
}
export default Pro;