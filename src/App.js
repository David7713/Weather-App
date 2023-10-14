import React, { useState,useEffect } from 'react';
import './App.css'; // Import your CSS file
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';
import Forecast from './components/forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/Api";
import weatherBackground from './components/Weather Assets/weather-background.png';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // Set the background image for the body element when the component mounts
    document.body.style.backgroundImage = `url(${weatherBackground})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    // Cleanup the style when the component unmounts
    return () => {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundRepeat = 'initial';
      document.body.style.backgroundSize = 'initial';
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then(response => response.json());

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then(response => response.json());

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(([weatherResponse, forecastResponse]) => {
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App" 
    >
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather  data={currentWeather}/>}
      { forecast && <Forecast data ={forecast} />}
    </div>
  );
}

export default App;
