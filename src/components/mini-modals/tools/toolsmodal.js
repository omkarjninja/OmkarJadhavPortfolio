import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import Socials from './socials';
import Insta from '../../../assets/icons/Instagram.png';import coffee from '../../../assets/icons/coffee.png';
import twitter from '../../../assets/icons/Twitter.png';import link from '../../../assets/icons/linkedin.png';
import Tools from './tools';import todo from '../../../assets/icons/todo.png';
import notes from '../../../assets/icons/notes.png';
import calender from '../../../assets/icons/calender.ico';import clock from '../../../assets/icons/clock.ico';
import calculator from '../../../assets/icons/calculate.ico';import music from '../../../assets/icons/music Pads.ico';
import weather from '../../../assets/icons/weather.ico';
// import VS from './vs';

function ToolsModal(props){
  const lati=props.lat;
  const long=props.log;
  console.log(lati,long)
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
       <Modal.Header>
         {/* <Modal.Title >Tools</Modal.Title> */}
         <div className='hey'>
          <h2 className='spotify-title' style={{cursor:"default"}}>Tools</h2><button className='btn-x' onClick={handleClose}>X</button>
          </div>
       </Modal.Header>
       <Modal.Body>
        <div className='grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xs:grid-cols-3 lg:gap-2 pt-4'>
      <Tools 
      image={todo} name="To Do List"
      ></Tools>
      <Tools 
      image={notes} name="Notes"
      ></Tools>
      <Tools 
      image={calculator} name="Calculator"
      ></Tools>
      <Tools 
      image={calender} name="Calender"
      ></Tools>
      <Tools 
      image={weather} name="Weather" lat={lati} log={long}
      ></Tools>
      <Tools 
      image={music} name="Music Pads"
      ></Tools>
      <Tools 
      image={clock} name="Clock"
      ></Tools>
      </div>
       </Modal.Body>
     </Modal>
      <center>
       <div className='icon-box' onClick={handleShow}>
          <img className="icon" src={props.image}  ></img>
          <p className='icon-name'>{props.name}</p>
      </div>
      </center>
      </>
  )
 }
 export default ToolsModal;;