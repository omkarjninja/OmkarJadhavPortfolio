import React, { useState } from 'react';
import "./weather.css"
const API_KEY = 'f94e29a28c6701444dd46bf288788198'; // Replace with your actual API key

function Weather(props) {  
  let lat=props.lat;
 let long=props.log;
 const [btnclass,setbtnclass]=useState('')
 const [contentclass,setcontentclass]=useState('')
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setbtnclass('hide')
  };

  return (
    <>

<button className={`${btnclass} anywhere`} onClick={handleSubmit}>Get Weather</button>
     




{/*  */}
{weatherData && 
        

<div className={`flex down fast`} style={{margin:"-5px"}}>
<img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} width={"60px"}></img>
<div className='grp'>
<p className={`up`}>{weatherData.main.temp}°C </p>
<p className={``}>{weatherData.weather[0].main} </p>
</div>


</div>
          
         
        
       
     
   
}
{/*
    Graphic from https://www.opendoodles.com/
*/}




    </>
    
  );
}

export default Weather;


