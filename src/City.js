import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="city">
      <h1 className="location">{props.data.city}</h1>

      <h5 className="current-time">{props.data.date}</h5>
    </div>
  );
}