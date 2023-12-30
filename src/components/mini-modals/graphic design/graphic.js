import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Design from './design';

function Graphic(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
       <Modal.Header >
         <div className='hey'>
          <h2 className='spotify-title'>Graphic Design</h2><button className='btn-x' onClick={handleClose}>X</button>
          </div>
       </Modal.Header>
       <Modal.Body>
       <Design></Design>
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
 export default Graphic;