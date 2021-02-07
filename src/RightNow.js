import React from "react";
import "./RightNow.css";

export default function RightNow() {
  return (
    <span className="rightNow">
      <h6>
        Right Now, <span className="condition"></span> Cloudy{" "}
      </h6>
      <h1>
        <img className="icon" src="" />
        <span className="current-temp"></span>
        <a href="#" className="active fahrenheit">
          {" "}
          48 ºF{" "}
        </a>
        <a href="#">
          <small className="inactive celsius">ºC</small>
        </a>
      </h1>
    </span>
  );
}