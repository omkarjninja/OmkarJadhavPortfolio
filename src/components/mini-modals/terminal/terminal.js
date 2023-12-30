import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import VS from './vs';
import "./terminal.css"
import Term from './term';

function Terminal(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
       {/* <Modal.Header closeButton>
         <Modal.Title >Terminal</Modal.Title>
       </Modal.Header> */}
       {/* <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
       <div className="mx-auto pr-16 flex relative" id="terminaltitle">
        <p className="text-center text-sm mt-2">Terminal</p>
        <div className="ml-2 mt-3 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn" onClick={handleClose}>
      </div>
      </div>
      </div> */}
      <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
       <div className='hey'>
        <h2>&nbsp;</h2>
          <p className='text-center text-md mt-2'>Terminal</p>
          <div className="mr-3 mt-3 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-4 h-4" id="closebtn" onClick={handleClose}>
            </div>

          </div>
        </div>
       <Modal.Body>
       <Term close={handleClose}></Term>
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
 export default Terminal;