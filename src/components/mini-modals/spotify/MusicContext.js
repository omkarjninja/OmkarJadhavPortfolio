import React, { useState, useEffect, useContext, createContext, useRef } from 'react';

// Music Context
const MusicContext = createContext();

// Music Provider Component
export const MusicProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // 'off', 'one', 'all'
  const [showFloatingPlayer, setShowFloatingPlayer] = useState(false);
  const [isFloatingMinimized, setIsFloatingMinimized] = useState(false);
  
  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();
    const handleLoadStart = () => setCurrentTime(0);
    const handleCanPlay = () => {
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentTrackIndex, isPlaying]);

  // Update audio source when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      audio.src = currentTrack.src;
      audio.volume = isMuted ? 0 : volume;
      audio.load(); // Load the new source
    }
  }, [currentTrackIndex, currentTrack]);

  // Update volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Control functions
  const play = () => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowFloatingPlayer(true);
      }).catch(console.error);
    }
  };

  const pause = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleNext = () => {
    if (playlist.length === 0) return;
    
    let nextIndex;
    if (repeatMode === 'one') {
      nextIndex = currentTrackIndex;
    } else if (isShuffled) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 
                  (repeatMode === 'all' ? 0 : currentTrackIndex);
    }
    setCurrentTrackIndex(nextIndex);
  };

  const handlePrevious = () => {
    if (playlist.length === 0) return;
    
    if (currentTime > 5) {
      // If more than 5 seconds played, restart current song
      seekTo(0);
    } else {
      const prevIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1;
      setCurrentTrackIndex(prevIndex);
    }
  };

  const seekTo = (time) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      setCurrentTime(time);
    }
  };

  const changeVolume = (newVolume) => {
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setRepeatMode(nextMode);
  };

  const playTrack = (index) => {
    if (index >= 0 && index < playlist.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      setShowFloatingPlayer(true);
    }
  };

  const closeFloatingPlayer = () => {
    pause();
    setShowFloatingPlayer(false);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const value = {
    // State
    playlist,
    currentTrack,
    currentTrackIndex,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    isShuffled,
    repeatMode,
    showFloatingPlayer,
    isFloatingMinimized,
    
    // Actions
    setPlaylist,
    play,
    pause,
    togglePlay,
    handleNext,
    handlePrevious,
    seekTo,
    changeVolume,
    toggleMute,
    toggleShuffle,
    toggleRepeat,
    playTrack,
    closeFloatingPlayer,
    setShowFloatingPlayer,
    setIsFloatingMinimized,
    formatTime
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
      <audio ref={audioRef} preload="metadata" />
    </MusicContext.Provider>
  );
};

// Custom hook to use music context
export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};