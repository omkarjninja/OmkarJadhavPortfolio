import './footer-icon.css';
// import pc from "../../../assets/icons/pc.ico"
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
// import pp from "../../assets/images/pp.png"
import xd from ".././assets/images/pp.png"



function FooterIcon(props){
   
    const [para,setpara]=useState(props.name)
   
    //  if(props.name==="Spotify"){
    //     setpara("hey wass up mfs")
    //  }


    // const a =props.link;
    return(
        <>


        <div className={`footer-icon-box ${props.class}`} onClick={props.clicking}>
            <img className={`footer-icon ${props.git}`} src={props.image} width="45px"></img>
            <p className='text-footer hidden hover:block'>{para}</p>
        </div>
        </>
    )
}
export default FooterIcon;