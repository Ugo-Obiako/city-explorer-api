import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const API_WEATHER_KEY = import.meta.env.VITE_API_WEATHER_KEY;



export default function App() {
  const [location, setLocation] = useState({display_name: "info about ???"});
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState('');





  async function getLocation() {
    const apiLocation = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(apiLocation);
    const locationObj = response.data[0];
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12`;
    setSearchMap(mapUrl);
    setLocation(locationObj);
    setWeather(currentWeather);
    console.log(locationObj);
  }


  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  
  // function errorMessage {
  // if (locationObj === false || locationObj = "undefined") {
  //    "error: Unable to geocode"
  // }

  return (
    <>
      <input onChange={updateQuery} />
      <button onClick={getLocation}>Explore!</button>
      <h2>The city is: {location.display_name}</h2>
      <h2>The latitude is: {location.lat}</h2>
      <h2>The longitude is: {location.lon}</h2>
      <img src={searchMap} alt="" />
      <h2>{handleError}</h2>

    </>
  )
}