import React from "react";
import "./RightNow.css";

export default function RightNow(props) {
  return (
    <span className="rightNow">
      <h6>
        Right Now, <span className="condition text-capitalize"> {props.data.description}</span>{" "}
      </h6>
      <h1>
        <img className="icon" src="" />
        <span className="current-temp"></span>
        <a href="#" className="active fahrenheit">
          {" "}
          {Math.round(props.data.temperature)} ºF{" "}
        </a>
        <a href="#">
          <small className="inactive celsius">ºC</small>
        </a>
      </h1>
    </span>
  );
}