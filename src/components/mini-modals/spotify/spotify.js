import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// Audio files
import song1 from "../../../assets/audio/co2.mp3";
import song2 from "../../../assets/audio/falling.mp3";
import song3 from "../../../assets/audio/tumho.mp3";
import s4 from "../../../assets/audio/fallingdown.mp3";
import s5 from "../../../assets/audio/feelgood.mp3";
import s6 from "../../../assets/audio/glimpse.mp3";
import s7 from "../../../assets/audio/golden.mp3";
import s8 from "../../../assets/audio/heartbreak.mp3";
import s9 from "../../../assets/audio/looking.mp3";
import q1 from "../../../assets/audio/mine.mp3";
import q2s from "../../../assets/audio/nadan.mp3";
import q3 from "../../../assets/audio/onmyway.mp3";
import q4 from "../../../assets/audio/parting.mp3";
import q5 from "../../../assets/audio/playdate.mp3";
import q6 from "../../../assets/audio/pouring.mp3";
import q7 from "../../../assets/audio/sao.mp3";
import q8 from "../../../assets/audio/space.mp3";
import q9 from "../../../assets/audio/telephone.mp3";
import w1 from "../../../assets/audio/vilen.mp3";

// Artist images
import a1 from "../../../assets/artist/co2.jpg";
import a2 from "../../../assets/artist/falling.png";
import a3 from "../../../assets/artist/tumho.jpg";
import a4 from "../../../assets/artist/feel.jpg";
import a5 from "../../../assets/artist/glimpse.png";
import a6 from "../../../assets/artist/golden.png";
import a7 from "../../../assets/artist/heart.jpeg";
import a8 from "../../../assets/artist/goodlooking.png";
import a9 from "../../../assets/artist/love.png";
import b1 from "../../../assets/artist/nadan.jpg";
import b2 from "../../../assets/artist/onmyway.jpg";
import b3 from "../../../assets/artist/parting.jpg";
import b4 from "../../../assets/artist/playdate.jpeg";
import b5 from "../../../assets/artist/pouring.jpg";
import b6 from "../../../assets/artist/crossing.jpg";
import b7 from "../../../assets/artist/space.jpeg";
import b8 from "../../../assets/artist/telephones.jpg";
import b9 from "../../../assets/artist/vilen.jpg";
import c1 from "../../../assets/artist/down.jpg";

function Spotify() {
  const playlist = [
    { src: song1, name: "CO2", img: a1, singers: "Prateek Kuhad" },
    { src: song2, name: "Falling", img: a2, singers: "Trevor Daniel" },
    { src: song3, name: "Tum Ho", img: a3, singers: "Mohit Chauhan, Suzanne D'Mello" },
    { src: s5, name: "Feel Good", img: a4, singers: "Daya, Gryffin, and Illenium" },
    { src: s4, name: "Falling Down", img: c1, singers: "Lil Peep, XXXTentacion" },
    { src: s6, name: "Glimpse of Us", img: a5, singers: "Joji" },
    { src: s7, name: "Golden Hour", img: a6, singers: "JVKE" },
    { src: s8, name: "HeartBreak Anniversary", img: a7, singers: "Giveon" },
    { src: s9, name: "Good Looking", img: a8, singers: "Suki Waterhouse" },
    { src: q1, name: "My Love Mine all Mine", img: a9, singers: "Mitski" },
    { src: q2s, name: "Nadan Parindey", img: b1, singers: "A R Rahman" },
    { src: q3, name: "On My Way", img: b2, singers: "Alan Walker, Farruko, Sabrina Carpenter" },
    { src: q4, name: "At Our Parting", img: b3, singers: "SAO" },
    { src: q5, name: "PlayDate", img: b4, singers: "Melanie Martinez" },
    { src: q6, name: "Pouring Outside", img: b5, singers: "dyl dion" },
    { src: q7, name: "Crossing Field", img: b6, singers: "LISA" },
    { src: q8, name: "Space Song", img: b7, singers: "Beach House" },
    { src: q9, name: "Telephones", img: b8, singers: "Vacations" },
    { src: w1, name: "Ek Raat", img: b9, singers: "VILEN" },
  ];

  const [currentTrack, setTrackIndex] = useState(0);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrev = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full max-w-lg flex flex-col items-center transition-transform duration-300 hover:scale-105">
        {/* Album Cover */}
        <img
          src={playlist[currentTrack].img || a1}
          alt={playlist[currentTrack].name}
          className="w-64 h-64 md:w-72 md:h-72 rounded-xl mb-4 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Song Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
          {playlist[currentTrack].name}
        </h2>

        {/* Artist Name */}
        <p className="text-gray-500 text-sm text-center mb-6">
          {playlist[currentTrack].singers}
        </p>

        {/* Audio Player */}
        <AudioPlayer
          volume={0.5}
          src={playlist[currentTrack].src}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrev}
          onEnded={handleEnd}
          showSkipControls
          showJumpControls={false}
          autoPlayAfterSrcChange
          className="w-full rounded-xl shadow-inner"
          style={{ backgroundColor: "white", borderRadius: "20px", color: "gray" }}
        />
      </div>
    </div>
  );
}

export default Spotify;



