import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./games.css";
import game1 from "../../.././assets/icons/game1.jpg";
import game2 from "../../.././assets/icons/game2.jpg";
import game3 from "../../.././assets/icons/game3.avif";
import GamesSingle from './game';


function GamesModal(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
       <Modal.Header>
         <div className='hey'>
          <h2 className='spotify-title'>Games</h2><button className='btn-x' onClick={handleClose}>X</button>
          </div>
       </Modal.Header>
       <Modal.Body>
        <div className='grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xs:grid-cols-3 lg:gap-2 pt-4'>
      <GamesSingle 
      image={game1} name="SPS"
      >
        
      </GamesSingle>
      <GamesSingle 
      image={game2} name="PokeDex"
      >
        
      </GamesSingle>
      <GamesSingle 
      image={game3} name="Quiz"
      >
        
      </GamesSingle>
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
 export default GamesModal;;