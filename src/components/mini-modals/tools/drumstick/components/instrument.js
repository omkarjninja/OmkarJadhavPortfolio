import "./instrument.css"
import w from "../assets/sounds/tom-1.mp3";import a from "../assets/sounds/tom-2.mp3";
import s from "../assets/sounds/tom-3.mp3";import d from "../assets/sounds/tom-4.mp3";
import j from "../assets/sounds/crash.mp3";import k from "../assets/sounds/kick-bass.mp3";
import l from "../assets/sounds/snare.mp3";
function Instrument(props){
    const music =()=>{
        const mus=new Audio(props.music);
        mus.play()
    }
 const kb=(event)=>{
    var value=event.target.value;
    if(value==="w"){var suk=new Audio(w);suk.play();}
 }
    return(
        <div>
            <button className={props.class} onClick={music} onKeyDown={kb}></button>
        </div>
    )
}
export default Instrument;