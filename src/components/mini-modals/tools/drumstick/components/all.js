import "./all.css"
import Instrument from "./instrument";
import w from "../assets/sounds/tom-1.mp3";import a from "../assets/sounds/tom-2.mp3";
import s from "../assets/sounds/tom-3.mp3";import d from "../assets/sounds/tom-4.mp3";
import j from "../assets/sounds/crash.mp3";import k from "../assets/sounds/kick-bass.mp3";
import l from "../assets/sounds/snare.mp3";
function Set(){
    return(
        <center>
        <div className="set w-10/12 xl:flex lg:flex md:block sm:block block">
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 w"} text={"w"} music={w}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 a"} text={"a"} music={a}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 s"} text={"s"} music={s}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 d"} text={"d"} music={d}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 j"} text={"j"} music={j}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 k"} text={"k"} music={k}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 l"} text={"l"} music={l}></Instrument>
            <Instrument class={"drum m-1 w-20 h-20 xl:m-2.5 xl:w-24 xl:h-24 lg:m-1 lg:w-20 lg:h-20 md:m-1 md:w-20 md:h-20 w"} text={"w"} music={w}></Instrument>
         </div>
        </center>
       
    )
}
export default Set;