import "./home.css";
import { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import axios from "axios";
const Change =()=>{
    window.location.href="/main"
}

const wallpapers=[
    "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500073584060-670c36a703f1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608764129330-5fa692919f7a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
function Home(){

const [date] = useState(new Date());
  const weekday = date.toLocaleDateString("default", { weekday: "long" });
  const Month = date.toLocaleDateString("default", { month: "long" });

  const [Joke, setJoke] = useState("");
  const [quote, setQuote] = useState("");
  const [bg, setBg] = useState("");


  
  

  // Fetch joke
  const fetchJoke = async () => {
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const data = await res.json();
      setJoke(data.joke || "No joke available 😅");
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Why do programmers hate bugs? Because they bite!");
    }
  };

  // Fetch quote
  const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
          method: "GET",
          headers: { "X-Api-Key": "vLx0M1NgV+stBl3C/XpCtg==eMYrd1RwukoZQHKe" },
        });
        const data = await res.json();
        // console.log(data[0].quote);
        // API returns an array of objects
        if (data && data.length > 0) {
          setQuote(`${data[0].quote} — ${data[0].author}`);
        }
        // setQuote(data[0].quote)
      } catch (err) {
        console.error("Error fetching quote:", err);
        setQuote("Something went wrong — Unknown");
      }
    };

  useEffect(() => {
    fetchJoke();
    fetchQuote();
    const randomIndex = Math.floor(Math.random() * 7);
    setBg(wallpapers[randomIndex]);
  }, []);

    return(
        <>
        <div className="homepage" onClick={Change}>
            <div className="homepage-main"
            style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-20 md:grid-cols-4 md:gap-8 p-20">
                <div className="h-full rounded-lg bg-transparent go hidden sm:grid md:grid lg:grid xl:grid">
                <h4 className='joke-content font-semibold text-center p-5'>{Joke.slice(0,110)+"..."}</h4>
                </div>
                <div className="h-full rounded-lg bg-transparent lg:col-span-2 place-content-center">
                <center>
                <Clock className='clock font-extrabold text-8xl xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl' format={'HH:mm'} ticking={true} timezone={null} date={Date.now()}/>
                <div className="date justify-center p-4 font-semibold"><p className="p-1 anywhere">{date.getDate()},</p><p className="p-1 anywhere">{Month}</p></div>
                {/* <div className='date'><p>{date},</p><p>{usedate.getDate()}</p><p>{Month}</p></div> */}
                </center>
                </div>
                {/* <div className="h-32 rounded-lg bg-transparent lg:col-span-2 place-content-center">
                <center>
                <div className="date justify-center p-4 font-semibold"><p className="p-1">{date},</p><p className="p-1">{usedate.getDate()}</p><p className="p-1">{Month}</p></div>
                </center>
                </div> */}
                <div className="h-full rounded-lg bg-transparent go hidden sm:grid md:grid lg:grid xl:grid">
                <h4 className='quote-content font-semibold text-center p-5'>{quote}</h4>
                </div>
            </div>
        </div>
        <div
  className="grid bg-transparent"
>
  {/* <div className="h-32 rounded-lg bg-transparent" onClick={Change}> */}
    <center>
    <p className="font-semibold text-2xl cursor-pointer anywhere" onClick={Change}>Click anywhere to Continue!</p>
    </center>

  {/* </div> */}
</div>
        {/* <div className='text font-semibold'>Click anywhere to Continue</div> */}
        </>
    )
}
export default Home
