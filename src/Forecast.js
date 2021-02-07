import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return <div className="Forecast">
    <div class="col range">
      <span class="time-range">Sun 16:00</span>
      <br/>
      <img class="forecastIcon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" /> 
      <br />
      <span class="tempOne">83</span>ºF
    </div>
  </div>;
}