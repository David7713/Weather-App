import React from 'react';
import './CurrentWeather.css';
import {WiStrongWind} from 'react-icons/wi'
import {WiHumidity} from 'react-icons/wi'
import {RiCelsiusFill} from 'react-icons/ri'
const CurrentWeather = ({ data }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const iconUrl = `${process.env.PUBLIC_URL}/icons/${data.weather[0].icon}.png`;


  return (
    <div className='currentWeather'>
      <div className='leftSide'>
        <p className='city'>{data.city}</p>
        <p className='currentDate'>{currentDate}</p>
        <div className='cityDetails'>
          <div className='cityDetailsLeftSIde'>
       
            <p className='weatherDescription'>{data.weather[0].description}</p>
          </div>
          <div className='cityDetailsRightSide'>
            <p>Details</p>
            <span className='feelsLike'>Feels Like - {Math.round(data.main.feels_like)} <RiCelsiusFill></RiCelsiusFill></span>
            <span>Humidity - {data.main.humidity} % <WiHumidity></WiHumidity></span>
            <span>Wind - {data.wind.speed} m/s <WiStrongWind></WiStrongWind></span>
            <span>Pressure - {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
      <div className='rightSide'>
      <span>{Math.round(data.main.temp)}<RiCelsiusFill></RiCelsiusFill></span>
      <img alt='weather' src={iconUrl} className='current-weather-image' />
      </div>
    </div>
  );
};

export default CurrentWeather;

