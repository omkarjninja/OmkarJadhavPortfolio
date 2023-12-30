import { useState } from "react";

const Clock = () =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <>
 
  <h1 className="my-20 text-7xl text-center lg:text-center md:text-center xl:text-center sm:text-center ">{ctime}</h1>
 
  
  </>
}
export default Clock;