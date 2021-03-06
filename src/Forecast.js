import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);
  function showForecast(response){
    setForecast(response.data);
    setLoaded(true);
  }
  
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Imperial`;
  axios.get(url).then(showForecast);
  
  if (loaded){
  return <div className="Forecast">
    <div class="col range">
      <span class="time-range">Sun 16:00</span>
      <br/>
      <img class="forecastIcon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" /> 
      <br />
      <span class="tempOne">{forecast.list[0].main.temp}</span>ºF
    </div>
  </div>
  } else {
    return "Hello";
  } }