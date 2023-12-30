import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// audio files below
import song1 from "../../../assets/audio/co2.mp3";import song2 from "../../../assets/audio/falling.mp3";
import song3 from "../../../assets/audio/tumho.mp3";import s4 from "../../../assets/audio/fallingdown.mp3";import s5 from "../../../assets/audio/feelgood.mp3";
import s6 from "../../../assets/audio/glimpse.mp3";import s7 from "../../../assets/audio/golden.mp3";import s8 from "../../../assets/audio/heartbreak.mp3";
import s9 from "../../../assets/audio/looking.mp3";import q1 from "../../../assets/audio/mine.mp3";import q2s from "../../../assets/audio/nadan.mp3";
import q3 from "../../../assets/audio/onmyway.mp3";import q4 from "../../../assets/audio/parting.mp3";import q5 from "../../../assets/audio/playdate.mp3";
import q6 from "../../../assets/audio/pouring.mp3";import q7 from "../../../assets/audio/sao.mp3";import q8 from "../../../assets/audio/space.mp3";
import q9 from "../../../assets/audio/telephone.mp3";import w1 from "../../../assets/audio/vilen.mp3";

// artist images below

import a1 from "../../../assets/artist/co2.jpg";import a2 from "../../../assets/artist/falling.png";
import a3 from "../../../assets/artist/tumho.jpg";import a4 from "../../../assets/artist/feel.jpg";import a5 from "../../../assets/artist/glimpse.png";
import a6 from "../../../assets/artist/golden.png";import a7 from "../../../assets/artist/heart.jpeg";import a8 from "../../../assets/artist/goodlooking.png";
import a9 from "../../../assets/artist/love.png";import b1 from "../../../assets/artist/nadan.jpg";import b2 from "../../../assets/artist/onmyway.jpg";
import b3 from "../../../assets/artist/parting.jpg";import b4 from "../../../assets/artist/playdate.jpeg";import b5 from "../../../assets/artist/pouring.jpg";
import b6 from "../../../assets/artist/crossing.jpg";import b7 from "../../../assets/artist/space.jpeg";import b8 from "../../../assets/artist/telephones.jpg";
import b9 from "../../../assets/artist/vilen.jpg";import c1 from "../../../assets/artist/down.jpg";


import imga from "../../../assets/images/23.jpg"
import { useState } from 'react';
function Spotify(){
    const playlist = [
        { src: song1,name:"CO2",img:a1,singers:"Prateek Kuhad" },
        { src: song2,name:"Falling",img:a2,singers:"Trevor Daniel" },
        { src: song3,name:"Tum Ho",img:a3,singers:"Mohit Chauhan , Suzanne D'Mello" },
        { src: s5,name:"Feel Good",img:a4,singers:"Daya, Gryffin, and Illenium" },
        { src: s4,name:"Falling Down",img:c1,singers:"Lil Peep , XXXTentacion" },
        { src: s6,name:"Glimpse of Us",img:a5,singers:"Joji" },
        { src: s7,name:"Golden Hour",img:a6,singers:"JVKE" },
        { src: s8,name:"HeartBreak Anniversary",img:a7,singers:"Giveon" },
        { src: s9,name:"Good Looking",img:a8,singers:"Suki Waterhouse" },
        { src: q1,name:"My Love Mine all Mine",img:a9,singers:"Mitski" },
        { src: q2s,name:"Nadan Parindey",img:b1,singers:"A R Rahman" },
        { src: q3,name:"On My Way",img:b2,singers:"Alan Walker, Farruko,Sabrina Carpenter" },
        { src: q4,name:"At Our Parting",img:b3,singers:"SAO" },
        { src: q5,name:"PlayDate",img:b4,singers:"Melanie Martinez" },
        { src: q6,name:"Pouring Outside",img:b5,singers:"dyl dion" },
        { src: q7,name:"Crossing Field",img:b6,singers:"LISA" },
        { src: q8,name:"Space Song",img:b7,singers:"Beach House" },
        { src: q9,name:"Telephones",img:b8,singers:"Vacations" },
        { src: w1,name:"Ek Raat",img:b9,singers:"VILEN" },
      ]


      const [currentTrack, setTrackIndex] = useState(0)
      const handleClickNext = () => {
            setTrackIndex((currentTrack) =>
                currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
            );
        };
        const handleClickPrev = () => {
          setTrackIndex((currentTrack) =>
          currentTrack ===0 ? playlist.length - 1 : currentTrack - 1 
    
          );
      };
      
      const handleEnd = () => {
        console.log('end')
        setTrackIndex((currentTrack) =>
                currentTrack < playlist.length - 1 ? currentTrack +1 : 0
            );
      }

    return(
        <>
        <div className="bg-gray-100 p-4 flex justify-center items-center w-full">
  <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2 md:w-full">
    {/* <!-- Album Cover --> */}
    <img src={playlist[currentTrack].img || a1} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"></img>
    {/* <!-- Song Title --> */}
    <h2 className="text-xl font-semibold text-center text-black">{playlist[currentTrack].name}</h2>
    {/* <!-- Artist Name --> */}
    <p className="text-gray-600 text-sm text-center">{playlist[currentTrack].singers}</p>
    {/* <!-- Music Controls --> */}
    <AudioPlayer
          volume="0.5"
          src={playlist[currentTrack].src}
          // showSkipControls
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrev}
          onEnded={handleEnd}
          // header={`Now Playing : ${playlist[currentTrack].name}`}
          className='w-1/2'
          style={{color:"blue",border:"transparent"}}
          // footer={`Coming Up Next : ${playlist[currentTrack].name}`}
          showSkipControls={true} showJumpControls={false}
          autoPlayAfterSrcChange
          
          // Try other props!
        />




  </div>
</div>





   {/* <AudioPlayer
          volume="0.5"
          src={playlist[currentTrack].src}
          showSkipControls
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          header={`Now Playing : ${playlist[currentTrack].name}`}
          className='w-1/2'
          style={{backgroundColor:"red",color:"blue"}}
          footer={`Coming Up Next : ${playlist[currentTrack].name}`}
          // Try other props!
        /> */}
        </>
    )
}
export default Spotify;


// <!-- component -->
<div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
  <div className="bg-white p-8 rounded-lg shadow-md w-80">
    {/* <!-- Album Cover --> */}
    <img src="https://telegra.ph/file/2acfcad8d39e49d95addd.jpg" alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"></img>
    {/* <!-- Song Title --> */}
    <h2 className="text-xl font-semibold text-center">idk</h2>
    {/* <!-- Artist Name --> */}
    <p className="text-gray-600 text-sm text-center">Highvyn, Taylor Shin</p>
    {/* <!-- Music Controls --> */}
    <div className="mt-6 flex justify-center items-center">
      <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
            <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
      <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
        <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
            <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
      <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
            <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
    </div>
    {/* <!-- Progress Bar --> */}
    <div className="mt-6 bg-gray-200 h-2 rounded-full">
      <div className="bg-teal-500 h-2 rounded-full w-1/2"></div>
    </div>
    {/* <!-- Time Information --> */}
    <div className="flex justify-between mt-2 text-sm text-gray-600">
      <span>1:57</span>
      <span>3:53</span>
    </div>
  </div>
</div>