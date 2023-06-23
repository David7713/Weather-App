import React, { useState } from 'react';
import './Search.css';
import { GEO_API_URL, geoApiOptions } from '../../api/Api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');
  let debounceTimer;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      setSearch(inputValue); // Update the state only when not empty

      if (inputValue.trim() !== '') {
        try {
          const response = await fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
          );
          const data = await response.json();
          const city = data.data[0];
          if (city) {
            const { name, countryCode, latitude, longitude } = city;
            const option = {
              value: `${latitude} ${longitude}`,
              label: `${name}, ${countryCode}`
            };
            onSearchChange(option); // Pass the option object
          } else {
            console.log('City not found');
          }
        } catch (error) {
          console.error(error);
        }
      }
    }, 600);
  };

  return (
    <div className='search'>
      <div className='wrapper'>
        <div className='searchDiv'>
          <input
            className='searchInput'
            type='text'
            required
            onChange={handleChange}
          />
          <div className='underLine'></div>
          <label className='searchLabel'>Search for a city...</label>
        </div>
      </div>
    </div>
  );
};

export default Search;
