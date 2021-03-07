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

  if (loaded){
    let iconUrl = `http://openweathermap.org/img/wn/${forecast.list[0].weather.icon}@2x.png`
  return (<div className="Forecast">
    <div class="col range">
      <span class="time-range">Sun 16:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrl} alt="icon" /> 
      <br />
      <span class="tempOne">{Math.round(forecast.list[0].main.temp)}</span>ºF
    </div>
    <div class="col range">
        Day 2 Forecast
      </div>
      <div class="col range">
        Day 3 Forecast
      </div>
      <div class="col range">
        Day 4 Forecast
      </div>
      <div class="col range">
        Day 5 Forecast
      </div>
  </div>);
  } else {
    //console.log(forecast);
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Imperial`;
    axios.get(url).then(showForecast);
    return `Loading...`;
  } }