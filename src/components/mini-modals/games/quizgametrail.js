import "./games.css"
import { useState } from "react";
const useranswers=[];
function Quiz1(){
    const quizMovie = [
        {
            question: "Who directed the movie 'Inception'?",
            a: "Christopher Nolan",
            b: "Steven Spielberg",
            c: "Quentin Tarantino",
            d: "James Cameron",
            correct: "a",
        },
        {
            question: "Which actor portrayed the character of Iron Man in the Marvel Cinematic Universe?",
            a: " Chris Hemsworth",
            b: "Chris Evans",
            c: "Robert Downey Jr.",
            d: "Mark Ruffalo",
            correct: "c",
        },
        {
            question: "Which film won the Academy Award for Best Picture in 2019?",
            a:  "The Shape of Water",
            b: "Parasite",
            c: "Green Book",
            d: "Moonlight",
            correct: "b",
        },
        {
            question: "In which movie does Heath Ledger portray the iconic villain, the Joker?",
            a: "The Dark Knight",
            b: "Batman Begins",
            c: "Suicide Squad",
            d: "The Dark Knight Rises",
            correct: "a",
        },
        {
            question: "Which film series features characters named Neo, Trinity, and Morpheus?",
            a: "The Terminator",
            b: "The Matrix",
            c: "Mission: Impossible",
            d: "The Hunger Games",
            correct: "b",
        }
    ];
    const quiztech = [
        {
            question: "Who is the co-founder of Apple Inc.?",
            a: "Steve Jobs",
            b: "Bill Gates",
            c: "Elon Musk",
            d: "Mark Zuckerberg",
            correct: "a",
        },
        {
            question: "Which company developed the Android operating system?",
            a: "Google",
            b: "Microsoft",
            c: "Apple",
            d: "Samsung",
            correct: "a",
        },
        {
            question: "What does CPU stand for in a computer?",
            a:  "Central Processing Unit",
            b: "Computer Processing Unit",
            c: "Central Power Unit",
            d: "Control Processing Unit",
            correct: "a",
        },
        {
            question: "Which social media platform is known for its 140-character limit posts?",
            a: "Facebook",
            b: "Instagram",
            c: "Twitter",
            d: "LinkedIn",
            correct: "c",
        },
        {
            question: "What does 'www' stand for in a website URL?",
            a: "Web World Wide",
            b: "World Wide Web",
            c: "World Website",
            d: "Web World",
            correct: "b",
        }
    ];
    const quizanime = [
        {
            question: "Who is the main character in the anime 'Naruto'?",
            a: "Sasuke Uchiha",
            b: "Naruto Uzumaki",
            c: "Sakura Haruno",
            d: "Kakashi Hatake",
            correct: "b",
        },
        {
            question: "Which anime features a young alchemist named Edward Elric?",
            a: "Attack on Titan",
            b: "Fullmetal Alchemist",
            c: "One Piece",
            d: "My Hero Academia",
            correct: "b",
        },
        {
            question: "In 'Dragon Ball Z,' who is Goku's greatest rival?",
            a: "Vegeta",
            b: "Piccolo",
            c: "Frieza",
            d: "Cell",
            correct: "a",
        },
        {
            question:  "What is the name of the pirate king in 'One Piece'?",
            a: "Monkey D. Luffy",
            b: "Roronoa Zoro",
            c: "Whitebeard",
            d: "Gold Roger",
            correct: "d",
        },
        {
            question: "Which anime series is known for its protagonist named 'Gon Freecss'?",
            a: "Naruto",
            b: "Bleach",
            c: "Hunter x Hunter",
            d: "Fairy Tail",
            correct: "c",
        }
    ];
    const quizgame = [
        {
            question: "Which game features a character named 'Master Chief'?",
            a: "Halo",
            b:"Call of Duty",
            c: "Battlefield",
            d: "Destiny",
            correct: "a",
        },
        {
            question: "In 'The Legend of Zelda' series, what is the name of the protagonist?",
            a: "Ganondorf",
            b: "Link",
            c: "Zelda",
            d: "Sheik",
            correct: "b",
        },
        {
            question: "Which game involves building and survival in an open-world environment?",
            a: "Minecraft", 
            b: "Fortnite",
            c: "Apex Legends",
            d: "Overwatch",
            correct: "a",
        },
        {
            question: "What is the primary objective in the game 'Grand Theft Auto V'?",
            a: "Race cars",
            b: "Solve puzzles",
            c: "Build cities",
            d: "Commit crimes",
            correct: "d",
        },
        {
            question: "Which game is famous for its battle royale mode?",
            a: "League of Legends",
            b: "PUBG (PlayerUnknown's Battlegrounds)",
            c: "Rocket League",
            d: "Super Smash Bros.",
            correct: "b",
        }
    ];
    const quizmovieanswers=["a","c","b","a","b"];
    const quizecheanswers=["a","a","a","c","b"];
    const quizanimeanswers=["b","b","a","d","c"];
    const quizgameanswers=["a","b","a","d","b"];
    const [quizsolutions,setquizsolutions]=useState(quizmovieanswers)
    const [Category,setcategory]=useState("")
    const [part1,setpart1]=useState("")
    const [currentquestion,setcurrentquestion]=useState(0);
    const [quizset,setquizset]=useState(quizMovie);
    const [choicebox,setchoicebox]=useState("choice-box");
    const [quesbox,setquesbox]=useState("question-box-hidden");
    const [resultbox,setresultbox]=useState("results-hidden");
    const [userselection,setuserselection]=useState("");
    const [score,setscore]=useState(0);
    const moviebtn=()=>{
      setcategory("movies");
      setpart1("herechange");
      setquizset(quizMovie);
      setchoicebox("choice-box-hidden");
      setquesbox("question-box");
      setquizsolutions(quizmovieanswers);
    }
    const Techbtn=()=>{
        setcategory("tech");
        setpart1("herechange")
        setquizset(quiztech);
        setchoicebox("choice-box-hidden");
        setquesbox("question-box");
        setquizsolutions(quizecheanswers);
    }
    const Animebtn=()=>{
        setcategory("anime");
        setpart1("herechange")
        setquizset(quizanime)
        setchoicebox("choice-box-hidden");
        setquesbox("question-box");
        setquizsolutions(quizanimeanswers);
    }
    const Gamebtn=()=>{
        setcategory("games");
        setpart1("herechange")
        setquizset(quizgame)
        setchoicebox("choice-box-hidden");
        setquesbox("question-box");
        setquizsolutions(quizgameanswers);
    }
    
    const nextquestion=()=>{
        if (currentquestion===4) {
         setcurrentquestion(0);
         setquesbox("question-box-hidden");
         setresultbox("results-show");
          
        //  compareArrays(useranswers,quizanswers);
        } else {
         setcurrentquestion(currentquestion+1)
        }
        useranswers.push(userselection)
        calculateScore();
        
        // console.log(userselection);
        setuserselection()
        console.log(useranswers);
        console.log(quizsolutions);
     }
 
     const calculateScore = () => {
        let scoreCount = 0;
        for (let i = 0; i < quizsolutions.length; i++) {
          if (useranswers[i] === quizsolutions[i]) {
            scoreCount++;
          }
        }
        setscore(scoreCount);
        // setShowScore(true);
      };
        // const result=()=>{
        //     if(useranswers[0]==quizanswers[0]){score++};
        //     if(useranswers[1]==quizanswers[1]){score++};
        //     if(useranswers[2]==quizanswers[2]){score++};
        //     if(useranswers[3]==quizanswers[3]){score++};
        //     if(useranswers[4]==quizanswers[4]){score++};
        // }
        // const compareArrays = (a, b) => {
        //     if (a.length !== b.length) return alert("failed");
        //     else {
        //       // Comparing each element of your array
        //       for (var i = 0; i < a.length; i++) {
        //         if (a[i] == b[i]) {
        //           alert("i am correct")
        //         }
        //       }
        //     }
        //   };


     const quizreload=()=>{
        // compareArrays(useranswers,quizanswers);
        setchoicebox("choice-box");
        setresultbox("results-hidden");
        useranswers.length=0;
     }

// console.log(userselection);


//   alert(Category);
    return(
        <>
        {/* Choice page 01 starts */}
       <div className={`${choicebox}`}>
<div id="team" class={`section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800`}>
    <div class="container xl:max-w-6xl mx-auto px-4">
       
        <header class="text-center mx-auto mb-12">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-black dark:text-gray-100">
                <span class="font-light">Quiz</span> Categories
            </h2>
           
        </header>
        
        <div class="flex flex-wrap flex-row -mx-4 justify-center">
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s">
                    <div class="relative overflow-hidden px-6">
                        <button onClick={moviebtn}>
                        <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                        </img>
                        </button>
                    
                    </div>
                    <div class="pt-6 text-center">
                        <p class="text-lg leading-normal font-bold mb-1 text-black">Movies</p>
                        
                    </div>
                </div>
            </div>
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                    <div class="relative overflow-hidden px-6">
                       <button onClick={Techbtn}>
                       <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                    </img>
                       </button>
                    </div>
                    <div class="pt-6 text-center">
                        <p class="text-lg leading-normal font-bold mb-1 text-black">Technology</p>
                       
                    </div>
                </div>
            </div>
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                    <div class="relative overflow-hidden px-6">
                        <button onClick={Animebtn}>
                        <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                    </img>
                        </button>
                    </div>
                    <div class="pt-6 text-center">
                        <p class="text-lg leading-normal font-bold mb-1 text-black">Anime</p>
                       
                    </div>
                </div>
            </div>
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" >
                    <div class="relative overflow-hidden px-6">
                       <button onClick={Gamebtn}>
                       <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                    </img>
                       </button>
                    </div>
                    <div class="pt-6 text-center">
                        <p class="text-lg leading-normal font-bold mb-1 text-black">Games</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* Choice page 01 ends */}
{/* Question page 01 starts */}
<div className={`${quesbox} bg-white w-full`}>
<h1 className="text-black bg-white ml-2">{quizset[currentquestion].question}</h1>
        <br></br>
        <div className="options flex flex-col text-black">
    
       <label className="text-2xl pl-2"><input defaultChecked={false} type="radio" onClick={()=>{setuserselection("a");}} name="a" id="a" className="mr-2" >
        </input>a.{quizset[currentquestion].a}</label> 
       <label className="text-2xl pl-2"><input type="radio" onClick={()=>{setuserselection("b");}} name="a" id="a"  className="mr-2" ></input>b.{quizset[currentquestion].b}</label> 
       <label className="text-2xl pl-2"><input type="radio" onClick={()=>{setuserselection("c");}} name="a" id="a"  className="mr-2" ></input>c.{quizset[currentquestion].c}</label> 
       <label className="text-2xl pl-2"><input type="radio" onClick={()=>{setuserselection("d");}} name="a" id="a"  className="mr-2" ></input>d.{quizset[currentquestion].d}</label> 
        <center>
        <button className="rounded-sm w-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] mt-3 mb-3 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6" onClick={nextquestion}>{currentquestion===4?"Submit":"Next Question"}</button>
{/* 
        <div class="text-center space-x-4" onClick={quizreload}>
  <button class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  w-1/2 translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6 text-center rounded-full inline-flex items-center">
  


    &nbsp; &nbsp;<span>{currentquestion===4?"Submit":"Next Question"}</span>
  </button>
</div> */}

        </center>
        
       
        </div>
        </div>
{/* End of question section */}
<div className={`${resultbox}`}>
    {/* <h1>Your score is {score}</h1> */}
    {/* <button className="rounded-sm w-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] mb-3" onClick={quizreload}>Reload</button> */}
    <section class="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
                <div class="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">

                      <p class="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                       Your Score is <span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">{score}</span> /5.
                      </p>
                    </div>
                  </div>
              
                </div>
           
 <div class="text-center space-x-4 mt-6" onClick={quizreload}>
  <button class="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M15.977 0c-7.994 0-14.498 6.504-14.498 14.498 0 7.514 5.79 13.798 13.236 14.44l-2.87 1.455c-0.354 0.195-0.566 0.632-0.355 0.977l0.101 0.262c0.211 0.346 0.668 0.468 1.021 0.274l4.791-2.453c0.006-0.004 0.012-0.003 0.019-0.007l0.322-0.176c0.177-0.098 0.295-0.257 0.342-0.434 0.049-0.177 0.027-0.375-0.079-0.547l-0.191-0.313c-0.003-0.006-0.009-0.010-0.012-0.015l-2.959-4.624c-0.21-0.346-0.666-0.468-1.021-0.274l-0.232 0.162c-0.354 0.194-0.378 0.694-0.168 1.038l1.746 2.709c-0.009-0-0.018-0.004-0.027-0.005-6.54-0.429-11.662-5.907-11.662-12.47 0-6.891 5.607-12.498 12.498-12.498 6.892 0 12.53 5.606 12.53 12.498 0 3.968-1.823 7.613-5 9.999-0.442 0.332-0.53 0.959-0.199 1.401 0.332 0.442 0.959 0.531 1.401 0.199 3.686-2.768 5.799-6.996 5.799-11.598-0-7.994-6.536-14.498-14.53-14.498z" clip-rule="evenodd" />
</svg>


    &nbsp; &nbsp;<span> Reload Quiz </span>
  </button>
</div>

</section>
</div>
        </>
    )
}
export default Quiz1;




<section class="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
                <div class="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">

                      <p class="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                       Failed <span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">Products</span> Of Top Brands.
                      </p>

                      <p class="sm:mt-8 mt-2.5 text-[#10172A] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
                      I'm a <span class="font-semibold">fullstack developer</span>, 9 - 9 <span class="font-semibold">remote</span> worker, community builder, and a <span class="font-semibold">solo</span> traveller. I love to build <span class="font-semibold">apps</span> that solve real life problems.
                      </p>
                    </div>
                  </div>
              
                </div>
           
 <div class="text-center space-x-4 mt-6">
  <button class="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M15.977 0c-7.994 0-14.498 6.504-14.498 14.498 0 7.514 5.79 13.798 13.236 14.44l-2.87 1.455c-0.354 0.195-0.566 0.632-0.355 0.977l0.101 0.262c0.211 0.346 0.668 0.468 1.021 0.274l4.791-2.453c0.006-0.004 0.012-0.003 0.019-0.007l0.322-0.176c0.177-0.098 0.295-0.257 0.342-0.434 0.049-0.177 0.027-0.375-0.079-0.547l-0.191-0.313c-0.003-0.006-0.009-0.010-0.012-0.015l-2.959-4.624c-0.21-0.346-0.666-0.468-1.021-0.274l-0.232 0.162c-0.354 0.194-0.378 0.694-0.168 1.038l1.746 2.709c-0.009-0-0.018-0.004-0.027-0.005-6.54-0.429-11.662-5.907-11.662-12.47 0-6.891 5.607-12.498 12.498-12.498 6.892 0 12.53 5.606 12.53 12.498 0 3.968-1.823 7.613-5 9.999-0.442 0.332-0.53 0.959-0.199 1.401 0.332 0.442 0.959 0.531 1.401 0.199 3.686-2.768 5.799-6.996 5.799-11.598-0-7.994-6.536-14.498-14.53-14.498z" clip-rule="evenodd" />
</svg>
{/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.977 0c-7.994 0-14.498 6.504-14.498 14.498 0 7.514 5.79 13.798 13.236 14.44l-2.87 1.455c-0.354 0.195-0.566 0.632-0.355 0.977l0.101 0.262c0.211 0.346 0.668 0.468 1.021 0.274l4.791-2.453c0.006-0.004 0.012-0.003 0.019-0.007l0.322-0.176c0.177-0.098 0.295-0.257 0.342-0.434 0.049-0.177 0.027-0.375-0.079-0.547l-0.191-0.313c-0.003-0.006-0.009-0.010-0.012-0.015l-2.959-4.624c-0.21-0.346-0.666-0.468-1.021-0.274l-0.232 0.162c-0.354 0.194-0.378 0.694-0.168 1.038l1.746 2.709c-0.009-0-0.018-0.004-0.027-0.005-6.54-0.429-11.662-5.907-11.662-12.47 0-6.891 5.607-12.498 12.498-12.498 6.892 0 12.53 5.606 12.53 12.498 0 3.968-1.823 7.613-5 9.999-0.442 0.332-0.53 0.959-0.199 1.401 0.332 0.442 0.959 0.531 1.401 0.199 3.686-2.768 5.799-6.996 5.799-11.598-0-7.994-6.536-14.498-14.53-14.498z"></path>
</svg>

    &nbsp; &nbsp;<span> Reload Quiz </span>
  </button>
</div>

</section>