import React from "react";
import "./OtherStats.css";

export default function OtherStats(props) {
  return (
    <p>
      Today's High: <span className="current-high"></span>54ºF
      <br />
      Humidity: <span className="current-humidity"></span>{props.data.humidity}%
      <br />
      Wind: <span className="current-wind"></span>{props.data.wind}km/h
    </p>
  );
}