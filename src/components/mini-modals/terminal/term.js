import { useState } from "react"
import Projects from "../projects"

const instagram=()=>{window.open("https://www.instagram.com/omkar_jadhav_ninja/","_blank")}
const Linkedin=()=>{window.open("https://www.linkedin.com/in/omkar-jadhav-a09878249/","_blank")}
const Twitter=()=>{window.open("https://twitter.com/omkarjadhavninj","_blank")}
const Coffee=()=>{window.open("https://www.buymeacoffee.com/omkarjadhav","_blank")}
const github=()=>{window.open("https://github.com/omkarjninja","_blank")}

const mail=()=>{window.location.href="mailto:ojadhav250@gmail.com"}
function Term(props){
  const must="Windows:Devprojects User$";
  const lsvalue=" pro - profile |  abt - about |  tech - To get my technical stack info | mail - To Send me a Mail | social - to get into social directory |"
const pro=" Hello Myself Omkar , A full stack web Developer. Keen in creating Visually appealing webpages and web-applications."
const Tech = " HTML | CSS | JS | JQUERY | BootStrapCSS | TailwindCSS | ReactJS | NodeJS | ExpressJS | MongoDB | NoSQL | MaterialUI | Python | Git"
  const error=' This command is not Defined';
  const about= " Hello, I'm Omkar Jadhav, a MERN Stack Web Developer from India. I also have a hobby of graphic, UI design and Love to play Football & Sleep."
  const social=" insta - Instagram | git - Github | coffee - Buy Me a coffe | linkedin - Linkedin | twitter - Twitter"
const inputnew=<input id="input" type="text" spellCheck="false" autoFocus className="outline-none border-transparent bg-transparent text-white active:border-transparent"></input>
  const [msg,setmsg]=useState('')
  const [inputval,setinputval]=useState('')
    return(
        <>

<div className={`w-full`}>
  <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
    {/* <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal"> */}
      {/* <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
      </div>
      <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
      </div>
      <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
      </div> */}
      {/* <div className="mx-auto pr-16" id="terminaltitle">
        <p className="text-center text-sm mt-2">Terminal</p>
      </div> */}

    {/* </div> */}
    <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
      <p className="pb-1">Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.</p>
      <p className="pb-1">Windows:Devprojects User$ &nbsp; Press ls to get all availaible commands</p>
      <label className="pb-1">Windows:Devprojects User$ &nbsp;</label>
      <input id="input" type="text" spellCheck="false" autoFocus className="outline-none border-transparent bg-transparent text-white active:border-transparent" value={inputval} onChange={(e)=>setinputval(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
           {var value=e.target.value;setinputval('')
           if(value=="insta"){instagram();setmsg(must + "opening Instagram!")}
           if(value=="linkedin"){Linkedin();setmsg(must + "opening Linkedin !")}
           if(value=="twitter"){Twitter();setmsg(must + "opening Twitter")}
           if(value=="coffee"){Coffee();setmsg(must + "opening Buy Me a Coffee")}
           if(value=="git"){github();setmsg(must + "opening Github!")}
           if(value=="mail"){mail();setmsg(must + "opening mail app!")}
          if(value=="ls"){setmsg(must+lsvalue);}else{setmsg(must + error)}
          if(value=="pro"){setmsg(must+pro);}
          if(value=="abt"){setmsg(must+about);}
          if(value=="tech"){setmsg(must+Tech);}
          if(value=="social"){setmsg(must+social);}
          // if(value=="close"){cl()}
          // if(value=="mail"){mail();setmsg(must + "opening mail app!")}
          }
          
        }
        
    }}
      
      ></input>
      <p>{msg}</p>
    </div>
  </div> 
</div>


        </>
    )
}
export default Term