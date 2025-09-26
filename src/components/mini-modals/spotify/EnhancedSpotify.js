import React, { useEffect } from "react";
import { useMusic } from "./MusicContext";
import { 
  Play, 
  Pause, 
  Heart, 
  MoreHorizontal, 
  Music,
  Volume2,
  Shuffle,
  Repeat
} from "lucide-react";

// Import your actual audio files
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

// Import your artist images
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

// Your playlist data
const playlistData = [
  { 
    id: 1,
    src: song1, 
    name: "CO2", 
    img: a1, 
    singers: "Prateek Kuhad",
    duration: 180
  },
  { 
    id: 2,
    src: song2, 
    name: "Falling", 
    img: a2, 
    singers: "Trevor Daniel",
    duration: 195
  },
  { 
    id: 3,
    src: song3, 
    name: "Tum Ho", 
    img: a3, 
    singers: "Mohit Chauhan, Suzanne D'Mello",
    duration: 220
  },
  { 
    id: 4,
    src: s5, 
    name: "Feel Good", 
    img: a4, 
    singers: "Daya, Gryffin, and Illenium",
    duration: 200
  },
  { 
    id: 5,
    src: s4, 
    name: "Falling Down", 
    img: c1, 
    singers: "Lil Peep, XXXTentacion",
    duration: 175
  },
  { 
    id: 6,
    src: s6, 
    name: "Glimpse of Us", 
    img: a5, 
    singers: "Joji",
    duration: 210
  },
  { 
    id: 7,
    src: s7, 
    name: "Golden Hour", 
    img: a6, 
    singers: "JVKE",
    duration: 185
  },
  { 
    id: 8,
    src: s8, 
    name: "HeartBreak Anniversary", 
    img: a7, 
    singers: "Giveon",
    duration: 195
  },
  { 
    id: 9,
    src: s9, 
    name: "Good Looking", 
    img: a8, 
    singers: "Suki Waterhouse",
    duration: 205
  },
  { 
    id: 10,
    src: q1, 
    name: "My Love Mine all Mine", 
    img: a9, 
    singers: "Mitski",
    duration: 178
  },
  { 
    id: 11,
    src: q2s, 
    name: "Nadan Parindey", 
    img: b1, 
    singers: "A R Rahman",
    duration: 245
  },
  { 
    id: 12,
    src: q3, 
    name: "On My Way", 
    img: b2, 
    singers: "Alan Walker, Farruko, Sabrina Carpenter",
    duration: 188
  },
  { 
    id: 13,
    src: q4, 
    name: "At Our Parting", 
    img: b3, 
    singers: "SAO",
    duration: 225
  },
  { 
    id: 14,
    src: q5, 
    name: "PlayDate", 
    img: b4, 
    singers: "Melanie Martinez",
    duration: 168
  },
  { 
    id: 15,
    src: q6, 
    name: "Pouring Outside", 
    img: b5, 
    singers: "dyl dion",
    duration: 192
  },
  { 
    id: 16,
    src: q7, 
    name: "Crossing Field", 
    img: b6, 
    singers: "LISA",
    duration: 248
  },
  { 
    id: 17,
    src: q8, 
    name: "Space Song", 
    img: b7, 
    singers: "Beach House",
    duration: 201
  },
  { 
    id: 18,
    src: q9, 
    name: "Telephones", 
    img: b8, 
    singers: "Vacations",
    duration: 165
  },
  { 
    id: 19,
    src: w1, 
    name: "Ek Raat", 
    img: b9, 
    singers: "VILEN",
    duration: 215
  }
];

function EnhancedSpotify() {
  const { 
    playlist,
    setPlaylist,
    currentTrack, 
    currentTrackIndex, 
    isPlaying,
    volume,
    isShuffled,
    repeatMode,
    playTrack, 
    togglePlay,
    toggleShuffle,
    toggleRepeat,
    setShowFloatingPlayer,
    formatTime
  } = useMusic();

  // Set your playlist when component mounts
  useEffect(() => {
    setPlaylist(playlistData);
  }, [setPlaylist]);

  const handlePlayTrack = (index) => {
    playTrack(index);
    setShowFloatingPlayer(true);
  };

  const handlePlayPause = () => {
    togglePlay();
    if (!isPlaying) {
      setShowFloatingPlayer(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <Music className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My Music
          </h1>
          <p className="text-purple-200 text-lg">Your personal music collection</p>
        </div>

        {/* Global Controls */}
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-4 mb-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleShuffle}
                className={`p-2 rounded-full transition-all ${
                  isShuffled 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title="Toggle Shuffle"
              >
                <Shuffle className="w-5 h-5" />
              </button>
              <button
                onClick={toggleRepeat}
                className={`p-2 rounded-full transition-all relative ${
                  repeatMode !== 'off' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title={`Repeat: ${repeatMode}`}
              >
                <Repeat className="w-5 h-5" />
                {repeatMode === 'one' && (
                  <span className="absolute -top-1 -right-1 bg-white text-green-500 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                )}
              </button>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Volume2 className="w-5 h-5" />
              <span className="text-sm">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>

        {/* Currently Playing */}
        {currentTrack && (
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-400/30">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
              Now Playing
            </h2>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={currentTrack.img}
                  alt={currentTrack.name}
                  className="w-20 h-20 rounded-xl object-cover shadow-lg"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-green-400 animate-bounce"></div>
                      <div className="w-1 h-4 bg-green-400 animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-4 bg-green-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{currentTrack.name}</h3>
                <p className="text-purple-200 text-lg mb-2">{currentTrack.singers}</p>
                <div className="text-sm text-purple-300">
                  Track {currentTrackIndex + 1} of {playlist.length}
                </div>
              </div>
              <button
                onClick={handlePlayPause}
                className="p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Playlist */}
        <div className="bg-black/10 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Music className="w-6 h-6 mr-3 text-purple-400" />
              Your Playlist
              <span className="ml-3 text-sm font-normal text-purple-200">
                ({playlist.length} songs)
              </span>
            </h2>
          </div>
          
          {/* Playlist Header */}
          <div className="px-6 py-3 bg-white/5 border-b border-white/5">
            <div className="flex items-center text-sm font-medium text-gray-400 uppercase tracking-wider">
              <div className="w-8">#</div>
              <div className="flex-1">Title</div>
              <div className="w-20 text-center hidden md:block">Duration</div>
              <div className="w-16"></div>
            </div>
          </div>

          {/* Playlist Items */}
          <div className="max-h-96 overflow-y-auto">
            {playlist.map((track, index) => (
              <div
                key={track.id}
                className={`flex items-center p-4 cursor-pointer transition-all group border-b border-white/5 last:border-b-0 ${
                  currentTrackIndex === index
                    ? 'bg-purple-600/20 border-purple-400/30'
                    : 'hover:bg-white/5'
                }`}
                onClick={() => handlePlayTrack(index)}
              >
                {/* Track Number / Play Indicator */}
                <div className="w-8 text-center">
                  {currentTrackIndex === index && isPlaying ? (
                    <div className="flex justify-center space-x-0.5">
                      <div className="w-0.5 h-4 bg-green-400 animate-pulse"></div>
                      <div className="w-0.5 h-4 bg-green-400 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-0.5 h-4 bg-green-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  ) : (
                    <>
                      <span className={`text-sm ${
                        currentTrackIndex === index ? 'text-green-400' : 'text-gray-400'
                      } group-hover:hidden`}>
                        {index + 1}
                      </span>
                      <Play className="w-4 h-4 text-white hidden group-hover:block" />
                    </>
                  )}
                </div>

                {/* Album Art */}
                <div className="relative mr-4">
                  <img
                    src={track.img}
                    alt={track.name}
                    className="w-12 h-12 rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>';
                    }}
                  />
                  {currentTrackIndex === index && (
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full ${
                        isPlaying ? 'bg-green-400 animate-pulse' : 'bg-white'
                      }`}></div>
                    </div>
                  )}
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold truncate ${
                    currentTrackIndex === index ? 'text-green-400' : 'text-white'
                  }`}>
                    {track.name}
                  </h3>
                  <p className="text-gray-300 text-sm truncate">{track.singers}</p>
                </div>

                {/* Duration */}
                <div className="w-20 text-center text-gray-400 text-sm hidden md:block">
                  {formatTime(track.duration)}
                </div>

                {/* Action Buttons */}
                <div className="w-16 flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to favorites functionality
                    }}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                    title="Add to favorites"
                  >
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // More options menu
                    }}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                    title="More options"
                  >
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/10 inline-block">
            <p className="text-purple-200 text-sm mb-1">
              🎵 Music continues playing when you navigate away
            </p>
            <p className="text-purple-300 text-xs">
              Control playback with the floating player that appears when music starts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnhancedSpotify;