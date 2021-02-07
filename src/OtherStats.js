import React from "react";
import "./OtherStats.css";

export default function OtherStats() {
  return (
    <p>
      Today's High: <span className="current-high"></span>54ºF
      <br />
      Humidity: <span className="current-humidity"></span>62%
      <br />
      Wind: <span className="current-wind"></span>3km/h
    </p>
  );
}