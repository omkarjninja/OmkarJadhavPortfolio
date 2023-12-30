import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import Socials from './socials';
import Insta from '../../../assets/icons/Instagram.png';import coffee from '../../../assets/icons/coffee.png';
import twitter from '../../../assets/icons/Twitter.png';import link from '../../../assets/icons/linkedin.png';
import ToDo from './todolist';
import "./tools.css"
import Drum from './drumstick/drum';
import WeatherModal from './weather';
import Calci from './calculator';
import Notes from './notes';
import Calendary from './calender';
import Clock from './clock';
import Notesagain from './notes2';
import Calculator from './cal';
import Notesagaindemo from './notes3';
// import VS from './vs';

function Tools(props){
  const lat=props.lat;
  const log=props.log;

  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal_todo'>
       <Modal.Header>
         {/* <Modal.Title >{props.name}</Modal.Title> */}
         <div className='hey'>
          <h2 className='spotify-title' style={{cursor:"default"}}>{props.name}</h2>
          <button className='btn-x' onClick={handleClose}>x</button>
          </div>
       </Modal.Header>
       <Modal.Body>
       {props.name==="To Do List"?<ToDo></ToDo>:""}
       {props.name==="Music Pads"?<Drum></Drum>:""}
       {props.name==="Calculator"?<Calci></Calci>:""}
       {props.name==="Notes"?<Notesagain></Notesagain>:""}
       {props.name==="Calender"?<Calendary></Calendary>:""}
       {props.name==="Clock"?<Clock></Clock>:""}
       {props.name==="Weather"?<WeatherModal lat={lat} log={log}></WeatherModal>:""}
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
 export default Tools;;