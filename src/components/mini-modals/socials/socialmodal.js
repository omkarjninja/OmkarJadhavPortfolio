import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./social.css"
import Socials from './socials';
import Insta from '../../../assets/icons/Instagram.png';import coffee from '../../../assets/icons/coffee.png';
import twitter from '../../../assets/icons/Twitter.png';import link from '../../../assets/icons/linkedin.png';
import dart from '../../../assets/icons/dart.jpg';
// import VS from './vs';

function SocialModal(props){
  const [showProject, setShowProject] = useState(false);
 
  const handleClose = () => setShowProject(false);
  const handleShow = () => setShowProject(true);
  return(
      <>
       <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
       <Modal.Header>
         {/* <Modal.Title >Social Media</Modal.Title> */}
         <div className='hey'>
          <h2 className='cursor-default'>Social Media</h2><button className='btn-x' onClick={handleClose}>X</button>
          </div>
       </Modal.Header>
       <Modal.Body>
        <div className='grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xs:grid-cols-3 lg:gap-2 pt-4'>

      <Socials  className="lg:h-24 sm:h-8 md:h-12 w-1/5 rounded-lg bg-transparent p-0"
  image={twitter}
  name="Twitter"
  link="https://twitter.com/omkarjadhavninj">

  </Socials>
      <Socials  className="lg:h-24 sm:h-8 md:h-12 w-1/2 rounded-lg bg-transparent p-0"
  image={Insta}
  name="Instagram"
  link="https://www.instagram.com/omkar_jadhav_ninja/">

      </Socials>
      <Socials  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={link}
  name="Linkedin"
  link="https://www.linkedin.com/in/omkar-jadhav-a09878249/">

      </Socials>
      <Socials  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={coffee}
  name="Coffee"
  link="https://www.buymeacoffee.com/omkarjadhav">

      </Socials>
      <Socials  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={dart}
  name="Deviantart"
  link="https://www.deviantart.com/ninjaomkar">

      </Socials>
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
 export default SocialModal;;