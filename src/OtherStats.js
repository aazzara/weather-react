import React from "react";
import "./OtherStats.css";

export default function OtherStats(props) {
  return (
    <p>
      Today's High: <span className="current-high">{Math.round(props.data.highTemp)}</span>ºF
      <br />
      Humidity: <span className="current-humidity">{props.data.humidity}</span>%
      <br />
      Wind: <span className="current-wind">{props.data.wind}</span>km/h
    </p>
  );
}