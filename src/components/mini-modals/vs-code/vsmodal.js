import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import VS from './vs';
import "./vs.css"
import { CloseButton } from 'react-bootstrap';

function VSModal(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal_vs'>
       {/* <Modal.Header closeButton>
         <Modal.Title >VS Code</Modal.Title>
       </Modal.Header> */}
       <div id="header-buttons" class="py-3 px-4 flex">
                <div class="rounded-full w-4 h-4 bg-red-500 mr-2" onClick={handleClose}></div>
                {/* <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div> */}
            </div>
       <Modal.Body>
       <VS></VS>
       </Modal.Body>
     </Modal>
      <center>
       <div className='icon-box'>
          <img className="icon" src={props.image}  onClick={handleShow}></img>
          <p className='icon-name'>{props.name}</p>
      </div>
      </center>
      </>
  )
 }
 export default VSModal;