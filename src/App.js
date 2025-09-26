import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Screen from './components/Main/window-screen';
import DesktopOS from './components/Main/Desktop';
import { MusicProvider } from './components/mini-modals/spotify/MusicContext';
import FloatingMusicPlayer from './components/mini-modals/spotify/FloatingMusicPlayer';
// import { MusicProvider } from './components/mini-modals/spotify/newspotify';
// import FloatingMusicPlayer from './components/mini-modals/spotify/somebs';
function App() {
  const [lati, setlati] = useState('');
  const [long, setlong] = useState('');
  
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        console.error("Geolocation is not supported by this browser.");
      }
    };
    
    const showPosition = (position) => {
      setlati(position.coords.latitude);
      setlong(position.coords.longitude);
    };
    
    getLocation();
  }, []);
  return (
    // <MusicProvider>
    <MusicProvider>
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/main' element={<Screen lat={lati} log={long}></Screen>} />
    <Route path='/mac' element={<DesktopOS></DesktopOS>} />
    </Routes>
    {/* // <FloatingMusicPlayer /> */}
    <FloatingMusicPlayer />
  </MusicProvider>
  );
}

export default App;
