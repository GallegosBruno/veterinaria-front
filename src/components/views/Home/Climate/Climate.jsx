import React, { useState, useEffect } from 'react';
import axios from 'axios';

let currentTime=Date.now().toString()
let lastCall;
const ClimateBox = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '4c4c1ce7c5fc53e5b0d45fac39a36e58';
    
    useEffect(() => {
        const getLastCall=()=>{
            lastCall = localStorage.getItem("lastCall");
            if (isNaN(parseInt(lastCall))) {
              lastCall = 0;
            }
        }

        const setLastCall=()=>{
            localStorage.setItem('lastCall', currentTime);     
        }

        const saveWeatherData=(weatherData)=>{
            localStorage.setItem=('weather',JSON.stringify(weatherData))
        }

        const getWeatherData = async () => {
            try {
                getLastCall()
                if(currentTime-lastCall>3600000){
                    const response = await axios.get(
                      `http://api.openweathermap.org/data/2.5/weather?lat=-26.8082&lon=-65.2175&limit=5&appid=${apiKey}`
                      );
                      setWeatherData(response.data);
                      saveWeatherData(response.data)
                      setLastCall()
                }
                else{
                    setWeatherData(JSON.parse(localStorage.getItem('weather')))
                    console.log("clima no refrescado")
                }
          }
          catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };

    getWeatherData();
  }, [apiKey]);

  if (!weatherData) {
    return <p>Loading...</p>;
    }

  return (
    <div>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};


export default ClimateBox;