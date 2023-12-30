import Quiz from "./game1trail";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import GameQuiz from "./games1me";
import SPS from "./sps";
import Pokedex from "./pokedata";
import Pokecollect from "./pokemain.js";
import Quiz1 from "./quizgametrail.js";
function GamesSingle(props){
    const [showProject, setShowProject] = useState(false);
 
    const handleClose = () => setShowProject(false);
    const handleShow = () => setShowProject(true);
    return(
        <>
<Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal_todo'>
       <Modal.Header>
         <div className='hey'>
          <h2 className='spotify-title' style={{cursor:"default"}}>{props.name}</h2>
          <button className='btn-x' onClick={handleClose}>x</button>
          </div>
       </Modal.Header>
       <Modal.Body>
       {props.name==="Quiz"?<Quiz1></Quiz1>:""}
       {props.name==="SPS"?<SPS></SPS>:""}
       {props.name==="PokeDex"?<Pokecollect></Pokecollect>:""}
       </Modal.Body>
     </Modal>





         <center>
        <div className='icon-box' href={props.link} onClick={handleShow}>
            <img className="icon" src={props.image}></img>
            <p className='icon-name'>{props.name}</p>
        </div>
        </center>

        </>
    )
}
export default GamesSingle;