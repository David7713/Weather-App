import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='currentWeather'>
      <div className='leftSide'>
        <p className='city'>{data.city}</p>
        <p className='currentDate'>{currentDate}</p>
        <div className='cityDetails'>
          <div className='cityDetailsLeftSIde'>
            <img alt='weather' src={`icons/${data.weather[0].icon}.png`} />
            <p className='weatherDescription'>{data.weather[0].description}</p>
          </div>
          <div className='cityDetailsRightSide'>
            <p>Details</p>
            <span className='feelsLike'>Feels Like - {Math.round(data.main.feels_like)} °C</span>
            <span>Humidity - {data.main.humidity} %</span>
            <span>Wind - {data.wind.speed} m/s</span>
            <span>Pressure - {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
      <div className='rightSide'>
        <span>{Math.round(data.main.temp)}°C</span>
       
      </div>
    </div>
  );
};

export default CurrentWeather;

