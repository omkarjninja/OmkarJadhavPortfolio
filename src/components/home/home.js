import "./home.css"
import { useState , useEffect } from 'react';
import Clock from 'react-live-clock';
import axios from "axios";
const Change =()=>{
    window.location.href="/main"
}
function Home(){

const [usedate,setDate]= useState(new Date());
let date=usedate.toLocaleDateString('default', { weekday: 'long' })
let Month=usedate.toLocaleDateString('default', { month: 'long' })

 //Joke generator
 const [Joke, setJoke] =useState("");
 const fetchApi = () => {
     fetch("https://sv443.net/jokeapi/v2/joke/Dark?type=single")
         .then((res) => res.json())
         .then((data) => setJoke(data.joke));
         
 };
 window.onload =  fetchApi;
 console.log(Joke.length)
 
  //quote generator
  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchRandomQuote() {
      try {

        const quoteObject = await axios.get("https://api.quotable.io/random?maxLength=112");
        setQuote(quoteObject.data);
        console.log(quoteObject.data)
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    useEffect(() => {
      fetchRandomQuote();
    }, []);
const sss=quote.content;

console.log(quote.length)
    return(
        <>
        <div className="homepage" onClick={Change}>
            <div className="homepage-main"></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-20 md:grid-cols-4 md:gap-8 p-20">
                <div className="h-full rounded-lg bg-transparent go hidden sm:grid md:grid lg:grid xl:grid">
                <h4 className='joke-content font-semibold text-center p-5'>{Joke.slice(0,110)+"..."}</h4>
                </div>
                <div className="h-full rounded-lg bg-transparent lg:col-span-2 place-content-center">
                <center>
                <Clock className='clock font-extrabold text-8xl xl:text-9xl lg:text-9xl md:text-9xl sm:text-9xl' format={'HH:mm'} ticking={true} timezone={null} date={new Date()}/>
                <div className="date justify-center p-4 font-semibold"><p className="p-1 anywhere">{date},</p><p className="p-1 anywhere">{usedate.getDate()}</p><p className="p-1 anywhere">{Month}</p></div>
                {/* <div className='date'><p>{date},</p><p>{usedate.getDate()}</p><p>{Month}</p></div> */}
                </center>
                </div>
                {/* <div className="h-32 rounded-lg bg-transparent lg:col-span-2 place-content-center">
                <center>
                <div className="date justify-center p-4 font-semibold"><p className="p-1">{date},</p><p className="p-1">{usedate.getDate()}</p><p className="p-1">{Month}</p></div>
                </center>
                </div> */}
                <div className="h-full rounded-lg bg-transparent go hidden sm:grid md:grid lg:grid xl:grid">
                <h4 className='quote-content font-semibold text-center p-5'>{quote.content}</h4>
                </div>
            </div>
        </div>
        <div
  className="grid bg-transparent"
>
  {/* <div className="h-32 rounded-lg bg-transparent" onClick={Change}> */}
    <center>
    <p className="font-semibold text-2xl cursor-pointer anywhere" onClick={Change}>Click anywhere to Continue</p>
    </center>

  {/* </div> */}
</div>
        {/* <div className='text font-semibold'>Click anywhere to Continue</div> */}
        </>
    )
}
export default Home