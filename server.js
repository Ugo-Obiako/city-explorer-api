'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;
const weatherData = require('./weather.json')

const app = express();

// middleware
app.use(cors());

console.log(weatherData)

// helper functions


// Endpoint to handle GET requests to /weather
app.get('/weather', (request, response) => {
   const {lat, lon, searchQuery} = request.query

//Check if lat, lon, and searchQuery are provided in the request
if (lat && lon && searchQuery) {
  // Use lat, lon, and query for processing
  response.send(`Latitude: ${lat}, Longitude: ${lon}, Query: ${searchQuery}`);
} else {
  response.status(400).send('Missing lat, lon and searchQueryparameters');
}


// Find the city based on lat, lon, or searchQuery
  const foundCity = cities.find(city => {
    return (
      (parseFloat(lat) === weatherData.lat && parseFloat(lon) === city.lon) ||
      searchQuery.toLowerCase() === city.name.toLowerCase()
    );
  });

  // If city is found, return city information with forecast, else return an error
  if (foundCity) {
    const forecasts = foundCity.forecast.map(item => new Forecast(item.date, item.description));
    return response.json({ city: foundCity.name, forecast: forecasts });
  } else {
    return response.status(404).json({ error: 'City not found' });
  }
});

class Forecast {
    constructor(date, description) {
      this.date = date;
      this.description = description;
    }
  }

// start server
app.listen(PORT, () => console.log(`listening on ${PORT}`));
