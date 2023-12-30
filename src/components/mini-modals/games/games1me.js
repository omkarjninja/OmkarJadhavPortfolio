// import { useState } from "react";
// import Quiz1 from "./quizgametrail";

// function GameQuiz(){
//     const [currentquestion,setcurrentquestion]=useState(0)
//     // const [btntext,setbtntext]=useState()
//     const quizData = [
//         {
//             question: "Which language runs in a web browser?",
//             a: "Java",
//             b: "C",
//             c: "Python",
//             d: "JavaScript",
//             correct: "d",
//         },
//         {
//             question: "What does CSS stand for?",
//             a: "Central Style Sheets",
//             b: "Cascading Style Sheets",
//             c: "Cascading Simple Sheets",
//             d: "Cars SUVs Sailboats",
//             correct: "b",
//         },
//         {
//             question: "What does HTML stand for?",
//             a: "Hypertext Markup Language",
//             b: "Hypertext Markdown Language",
//             c: "Hyperloop Machine Language",
//             d: "Helicopters Terminals Motorboats Lamborginis",
//             correct: "a",
//         },
//         {
//             question: "What year was JavaScript launched?",
//             a: "1996",
//             b: "1995",
//             c: "1994",
//             d: "none of the above",
//             correct: "b",
//         },
//     ];
    
//         const nextquestion=()=>{
//            if (currentquestion===3) {
//             setcurrentquestion(0);
//            } else {
//             setcurrentquestion(currentquestion+1)
//            }
//         }

//     return(
//         <>
//         {/* <h1>{quizData[currentquestion].question}</h1>
//         <br></br>
//         <div className="options flex flex-col">
    
//        <label><input type="radio" name="a" id="a" ></input>{quizData[currentquestion].a}</label> 
//        <label><input type="radio" name="a" id="a" ></input>{quizData[currentquestion].b}</label> 
//        <label><input type="radio" name="a" id="a" ></input>{quizData[currentquestion].c}</label> 
//        <label><input type="radio" name="a" id="a" ></input>{quizData[currentquestion].d}</label> 
        
//         <button onClick={nextquestion}>{currentquestion===2?"Submit":"Next Question"}</button>
       
//         </div> */}
//         <Quiz1></Quiz1>
//         </>
//     )
// }
// export default GameQuiz;