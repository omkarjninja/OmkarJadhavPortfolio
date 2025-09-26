import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Minimize2, 
  X,
  Music,
  Shuffle,
  Repeat,
  Heart,
  Maximize2
} from 'lucide-react';
import { useMusic } from './MusicContext';

const FloatingMusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isShuffled,
    repeatMode,
    showFloatingPlayer,
    isFloatingMinimized,
    togglePlay,
    handleNext,
    handlePrevious,
    seekTo,
    changeVolume,
    toggleMute,
    toggleShuffle,
    toggleRepeat,
    closeFloatingPlayer,
    setIsFloatingMinimized,
    formatTime
  } = useMusic();

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth - 320 : 20, 
    y: 20 
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const playerRef = useRef(null);

  // Handle window resize to keep player in bounds
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setPosition(prev => ({
          x: Math.min(prev.x, window.innerWidth - 300),
          y: Math.min(prev.y, window.innerHeight - 100)
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Drag functionality
  const handleMouseDown = (e) => {
    // Don't start dragging if clicking on interactive elements
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.no-drag')) {
      return;
    }

    e.preventDefault();
    setIsDragging(true);
    
    const rect = playerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    const handleMouseMove = (e) => {
      if (typeof window === 'undefined') return;
      
      const newX = Math.max(0, Math.min(window.innerWidth - 300, e.clientX - dragOffset.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y));
      
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return;
    
    const touch = e.touches[0];
    const rect = playerRef.current.getBoundingClientRect();
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    if (typeof window === 'undefined') return;
    
    const newX = Math.max(0, Math.min(window.innerWidth - 300, touch.clientX - dragOffset.x));
    const newY = Math.max(0, Math.min(window.innerHeight - 100, touch.clientY - dragOffset.y));
    
    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Don't render if not showing or no current track
  if (!showFloatingPlayer || !currentTrack) return null;

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={playerRef}
      className={`fixed z-[9999] bg-white rounded-xl shadow-2xl border border-gray-200 transition-all duration-300 select-none ${
        isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
      } ${isFloatingMinimized ? 'w-16 h-16' : 'w-80 h-auto'}`}
      style={{ 
        left: position.x, 
        top: position.y,
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.95)'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isFloatingMinimized ? (
        // Minimized view
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFloatingMinimized(false);
            }}
            className="relative z-10 text-white hover:scale-110 transition-transform p-2 rounded-full hover:bg-white/20"
            title="Expand player"
          >
            <Music className="w-6 h-6" />
          </button>
          {/* Pulse animation for playing state */}
          {isPlaying && (
            <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
          )}
        </div>
      ) : (
        // Full player view
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 no-drag">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Now Playing</span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFloatingMinimized(true);
                }}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                title="Minimize player"
              >
                <Minimize2 className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeFloatingPlayer();
                }}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                title="Close player"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Track Info */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <img
                src={currentTrack.img}
                alt={currentTrack.name}
                className="w-12 h-12 rounded-lg object-cover shadow-md"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>';
                }}
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate">
                {currentTrack.name}
              </h4>
              <p className="text-xs text-gray-500 truncate">{currentTrack.singers}</p>
            </div>
            <button 
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors no-drag"
              title="Add to favorites"
            >
              <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 no-drag">
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <div className="flex-1 relative">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 rounded-full transition-all duration-200"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => {
                    seekTo(parseFloat(e.target.value));
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span className="w-10 text-left">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center space-x-3 mb-4 no-drag">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleShuffle();
              }}
              className={`p-1.5 rounded-full transition-all ${
                isShuffled 
                  ? 'text-purple-600 bg-purple-100' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              title={isShuffled ? 'Disable shuffle' : 'Enable shuffle'}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all"
              title="Previous track"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all"
              title="Next track"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleRepeat();
              }}
              className={`p-1.5 rounded-full transition-all relative ${
                repeatMode !== 'off' 
                  ? 'text-purple-600 bg-purple-100' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              title={`Repeat: ${repeatMode}`}
            >
              <Repeat className="w-4 h-4" />
              {repeatMode === 'one' && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs font-bold">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-3 no-drag">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <div className="flex-1 relative">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-200"
                  style={{ width: `${volume * 100}%` }}
                ></div>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => {
                  changeVolume(parseFloat(e.target.value));
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-xs text-gray-500 w-8 text-center">
              {Math.round(volume * 100)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMusicPlayer;