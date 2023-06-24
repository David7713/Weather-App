import React from 'react';
import './Forecast.css';

const Forecast = ({ data }) => {
  const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <div>
      <div className="forecast-container">
        {data.list.splice(0, 7).map((item, idx) => (
          <div key={idx} className="forecast-item">
            <p className="day">{forecastDays[idx]}</p>
            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
            <p className="description">{item.weather[0].description}</p>
            <p className="min-max">
              {Math.floor(item.main.temp_min)} °C / {Math.ceil(item.main.temp_max) } °C 
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;


{/* <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
            <label className="description">{item.weather[0].description}</label>
            <label className="min-max">
              {Math.floor(item.main.temp_min)} °C / {Math.ceil(item.main.temp_max)}
            </label> */}