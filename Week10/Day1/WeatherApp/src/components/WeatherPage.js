import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function WeatherPage({ addToFavorites, apiKey }) {
    //State variables
    const [city, setCity] = useState(''); //State to manage the city input
    const [weatherData, setWeatherData] = useState(null); //State to store weather data
    const [error, setError] = useState(null); //State to handle errors
  
    //Function to handle adding city to favorites
    const handleAddToFavorites = () => {
      if (city.trim() !== '') { //Ensure city is not empty
        addToFavorites(city);
        setCity(''); //Clear city input
        setError(null); //Clear any previous errors
      } else {
        setError('City cannot be empty');
      }
    };
  
    //Function to fetch weather data from AccuWeather API
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`);
        const data = await response.json();
        if (data.length > 0) {
          const locationKey = data[0].Key;
          const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
          const weatherData = await weatherResponse.json();
          setWeatherData(weatherData[0]); //Set the weather data
        } else {
          setError('City not found');
        }
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        <h1>Weather Page</h1>
        {/* City input field */}
        <TextField 
          label="Enter City" 
          variant="outlined" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        {/* Button to fetch weather data */}
        <Button variant="contained" color="primary" onClick={fetchWeatherData}>Get Weather</Button>
        {/* Display error message if there's an error */}
        {error && <p>{error}</p>}
        {/* Display weather information if available */}
        {weatherData && (
          <div>
            <h2>Weather Information</h2>
            <p>{weatherData.WeatherText}</p>
            <p>Temperature: {weatherData.Temperature.Metric.Value}°C</p>
          </div>
        )}
        {/* Button to add city to favorites */}
        <Button variant="contained" color="primary" onClick={handleAddToFavorites}>Add to Favorites</Button>
      </div>
    );
  }
  
  export default WeatherPage;