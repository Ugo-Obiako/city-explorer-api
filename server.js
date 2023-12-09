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

// routes
app.get('/weather', (request, response) => {
response.send(weatherData)
});
console.log('jsonData');



console.log(jsonData);
// helper functions


// start server
app.listen(PORT, () => console.log(`listening on ${PORT}`));
