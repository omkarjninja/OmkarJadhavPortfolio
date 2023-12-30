import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Spotify from './spotify';
import "./spotify.css"

function SpotifyModal(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal_spotify'>
       {/* <Modal.Header closeButton>
         <Modal.Title >VS Code</Modal.Title>
       </Modal.Header> */}
       {/* <div id="header-buttons" class="py-3 px-4 flex">
                <div class="rounded-full w-5 h-5 bg-red-500 mr-2" onClick={handleClose}></div>
                <center>
                <h2 className='text-black ml-10'>Omkar's Favorite Music!</h2>
                </center>
                </div> */}
                <div className='hey'>
          <h2 className='spotify-title text-black mt-3 ml-3'>Omkar's Favorite Music!</h2> <div class="rounded-full w-5 h-5 bg-red-500 mt-3 mr-3" onClick={handleClose}></div>
          </div>
                {/* <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                <div class="rounded-full w-3 h-3 bg-green-500"></div> */}
            
       <Modal.Body>
       <Spotify></Spotify>
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
 export default SpotifyModal;