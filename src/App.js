import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import demo from './components/Main/demo';
import Demo from './components/Main/demo';
import Screen from './components/Main/window-screen';
function App() {
  const [lati,setlati]=useState('')
  const [long,setlong]=useState('')
  const getLocation=()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.")
    }
  }
  const showPosition=(position)=> {
    setlati(position.coords.latitude)
    setlong(position.coords.longitude)
  }
  getLocation()
  return (
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/main' element={<Screen lat={lati} log={long}></Screen>} />
    </Routes>
  );
}

export default App;
