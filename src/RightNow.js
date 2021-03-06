import React from "react";
import TempConv from "./TempConv";
import "./RightNow.css";

export default function RightNow(props) {
  let fahrenheitTemp = props.data.temperature;
  return (
    <span className="rightNow">
      <h6>
        Right Now, <span className="condition text-capitalize"> {props.data.description}</span>{" "}
      </h6>
      <h1>
        <img className="icon" src={props.data.icon} />
        <TempConv fahrenheit={fahrenheitTemp}/>
      </h1>
    </span>
  );
}