import { useState } from "react";
import "./games.css";
import rock from "../../../assets/images/rock.png";
import scissorsd from "../../../assets/images/scissors.png";
import papers from "../../../assets/images/paper.png";
import skull from "../../../assets/images/skull.svg";
function SPS(){
    const [userselection,setuserselection]=useState("")
    const [Computerselection,setComputerselection]=useState("stone")
    const [winner,setwinner]=useState("None")
    const choices=[
        "stone","paper","scissors"
    ]
    const stone=()=>{
        setuserselection("stone")
        // alert("stone is selected")
        comprandom();
        Findwinner();
    }
    const paper=()=>{
        setuserselection("paper")
        // alert("paper is selected")
        comprandom();
        Findwinner();
    }
    const scissors=()=>{
        setuserselection("scissors")
        // alert("scissors is selected")
        comprandom();
        Findwinner();
    }
    const comprandom=()=>{
        const gen=Math.random();
        const genagain=gen*2.5;
        const val=Math.floor(genagain);
        setComputerselection(choices[val])
    }
   
const Findwinner =()=>{
    if(userselection===Computerselection){
        setwinner("It's a Draw")
    }
    else if(userselection==="stone"){
        if(Computerselection==="paper"){
            setwinner("Winner is Computer!")
        }else{
            setwinner("Winner is User")
        }
    }
    else if(userselection==="paper"){
        if(Computerselection==="scissors"){
            setwinner("Winner is Computer!")
        }else{
            setwinner("Winner is User")
        }
    }
    else if(userselection==="scissors"){
        if(Computerselection==="stone"){
            setwinner("Winner is Computer!")
        }else{
            setwinner("Winner is User")
        }
    }
  
}
    


    return(
        <>
        <center>
            <h1 className="sps-head lg:text-6xl xl:text-6xl md:text-4xl sm:text-3xl text-3xl">Stone Paper Scissors</h1>
            <br></br>
            <h3 className="sps-para lg:text-3xl xl:text-3xl md:text-2xl sm:text-xl text-xl">Stone Beats Scissors | Scissors Beats Paper | Paper Beats Stone</h3>

       
      
        <div className="lg:w-1/2 xl:w-1/2 md:w-3/4 sm:w-3/4 w-3/4 flex mt-3" style={{border:"2px solid white"}}>
        <button onClick={stone} className="ml-3 mr-3 pr-2 py-2">
            <img className="sci" width={"200px"} src={rock}></img>
        </button>
        <button onClick={paper} className=" mr-3 pr-2 py-2">
        <img className="sci" width={"200px"} src={papers}></img>
        </button>
        <button onClick={scissors} className=" mr-3 pr-2 py-2">
        <img className="sci" width={"200px"} src={scissorsd}></img>
        </button>
        </div>
            <span className="flex items-center my-3">
            <span className="h-px flex-1 bg-white"></span>
            <span className="shrink-0 px-6">Let's Battle it out!</span>
            <span className="h-px flex-1 bg-white"></span>
            </span>
            <div className="lg:w-1/2 xl:w-1/2 md:w-3/4 sm:w-3/4 w-3/4 flex mt-3" style={{border:"2px solid white"}}>
        <button onClick={stone} className="ml-3 mr-3 pr-2 py-2 comp-btn">
            <p>Computer Choice</p>
            <img className="comp" width={"100px"} 
            src={skull}>

            </img>
        </button>
        <h1 className="lg:text-3xl xl:text-3xl md:text-2xl sm:text-xl text-xl text-center">{winner}</h1>
        </div>
        </center>

        
        </>
    )
}
export default SPS;