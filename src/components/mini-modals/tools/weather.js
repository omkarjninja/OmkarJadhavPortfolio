import { useState } from "react";

function WeatherModal(props){
    const lati = props.lat;
    const longi = props.log;
    const API_KEY = 'f94e29a28c6701444dd46bf288788198'; // Replace with your actual API key
    const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [boxclass, setBoxclass] = useState('hidden');
  const [btnclass, setbtnclass] = useState('');
  const [usedate,setDate]= useState(new Date());
  let date=usedate.toLocaleDateString('default', { weekday: 'long' })
  let day=usedate.toLocaleDateString('default',{day:"numeric"})
  let Month=usedate.toLocaleDateString('default', { month: 'long' })
  let year=usedate.toLocaleDateString('defauly',{year:"2-digit"})

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`);
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
      const weathershow=(e)=>{
        e.preventDefault();
        fetchWeatherData();
        setBoxclass('');
        setbtnclass('hidden')
        // setName(weatherData.name)
        // setTemp(weatherData.main.temp);



      }

console.log(weatherData)

    return(
        <>
        <center>

        
        <a onClick={weathershow} 
        class={` inline-block mt-16 mb-16 text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-800 border border-transparent transform hover:scale-110 no-underline hover:border-white transition-transform duration-3000 ease-in-out ${btnclass}`}>
        Click Here To Get Weather
        </a>
        </center>
       {/* background-image: url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80') */}
       {weatherData && 
<div className={`w-full mt-16 mb-16 justify-center container mx-auto ${boxclass}`}>
    <div className="flex flex-wrap w-full lg:w-auto">
        <div className="w-full lg:w-1/2 flex rounded-lg bg-auto" style={{backgroundImage:"url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')"}}>
            <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-blue-400 opacity-90 text-white">
                <div className="mb-20">
                    <h2 className="font-bold text-3xl leading-none pb-1">{date}</h2>
                    <h3 className="leading-none pb-2 pl-1">{day} {Month} {year}</h3>
                    <p className="flex aling-center opacity-75">
                    {weatherData.name}, {weatherData.sys.country}
                    </p>
                </div>
                <div>
                    
                    <strong className="leading-none text-6xl block font-weight-bolder">{weatherData.main.temp}°C</strong>
                    <b className="text-2xl block font-bold">{weatherData.weather[0].description}</b>
                </div>
            </div>
        </div>

        <div className="w-full lg:w-1/2 flex ml-0">
            <div className="lg:my-3 bg-gray-800 text-white p-8 lg:rounded-r-lg w-full">
                <div className="flex justify-between w-64 mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">Pressure</div><div className="w-auto text-right">{weatherData.main.pressure} HPa</div>
                </div>
                <div className="flex justify-between w-64 mb-4 w-full">
                    <div className="w-auto font-bold uppercase text-90">Humidity</div><div className="w-auto text-right">{weatherData.main.humidity} %</div>
                </div>
                <div className="flex justify-between w-64 mb-8 w-full">
                    <div className="w-auto font-bold uppercase text-90">Wind</div><div className="w-auto text-right">{weatherData.wind.deg} m/s</div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/4 bg-gray-100 text-black rounded-lg pb-4">
                        <div className="text-center pt-2 mb-2">
                            
                        </div>
                        <div className="text-center">
                            <b className="font-normal">Temp Min</b><br></br>
                            <strong className="text-xl">{weatherData.main.temp_min}°C</strong>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                        <div className="text-center pt-2 mb-2">
                            
                        </div>
                        <div className="text-center">
                            <b className="font-normal">Temp Max</b><br></br>
                            <strong className="text-xl">{weatherData.main.temp_max}°C</strong>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                        <div className="text-center pt-2 mb-2">
                           
                        </div>
                        <div className="text-center">
                            <b className="font-normal">Cloudiness</b><br></br>
                            <strong className="text-xl">{weatherData.clouds.all}%</strong>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                        <div className="text-center pt-2 mb-2">
                           
                        </div>
                        <div className="text-center">
                            <b className="font-normal">Weather</b><br></br>
                            <strong className="text-xl">{weatherData.weather[0].main}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}
        </>
    )
}
export default WeatherModal