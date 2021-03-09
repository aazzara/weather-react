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
  function hours(item) {
    let date = new Date(forecast.list[item].dt*1000);
    let hours = date.getHours();
    return `${hours}`
  }
  function temperature (item){
    let temperature = forecast.list[item].main.temp;
    return `${temperature}`
  }

  if (loaded && props.city === forecast.city.name){
    console.log(forecast);
      let iconUrlOne = `http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;
      let iconUrlTwo = `http://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}@2x.png`;
      let iconUrlThree = `http://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}@2x.png`;
      let iconUrlFour = `http://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}@2x.png`;
      let iconUrlFive = `http://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`;
  return (<div className="row Forecast">
    <div class="col range">
      <span class="time-range">{hours(0)}:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrlOne} alt="icon" /> 
      <br />
      <span c>{Math.round(temperature(0))}</span>ºF
    </div>
    <div class="col range">
        <span class="time-range">{hours(1)}:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrlTwo} alt="icon" /> 
      <br />
      <span >{Math.round(temperature(1))}</span>ºF
      </div>
      <div class="col range">
        <span class="time-range">{hours(2)}:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrlThree} alt="icon" /> 
      <br />
      <span >{Math.round(temperature(2))}</span>ºF
      </div>
      <div class="col range">
        <span class="time-range">{hours(3)}:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrlFour} alt="icon" /> 
      <br />
      <span >{Math.round(temperature(3))}</span>ºF
      </div>
      <div class="col range">
        <span class="time-range">{hours(4)}:00</span>
      <br/>
      <img class="forecastIcon" src={iconUrlFive} alt="icon" /> 
      <br />
      <span >{Math.round(temperature(4))}</span>ºF
      </div>
  </div>);
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Imperial`;
    axios.get(url).then(showForecast);
    return `Loading...`;
  } }