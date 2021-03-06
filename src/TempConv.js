import React, { useState } from "react";
import "./TempConv.css";

export default function TempConv(props){
    let [unit, setUnit] = useState("fahrenheit");
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "fahrenheit"){
        return <span>
                <span className="current-temp">{Math.round(props.fahrenheit)}</span>
                 <span className="active fahrenheit">
                {" "}
                 ºF{" "}
                </span>
                <a href="#"><small className="inactive celsius" onClick={convertToCelsius}>ºC</small>
                 </a>
            </span>
    } else {
        return <span>
                <span className="current-temp">{Math.round((props.fahrenheit-32)*5/9)}</span>
                 <a href="#" className="inactive fahrenheit" onClick={convertToFahrenheit}>
                {" "}
                 ºF{" "}
                </a>
                <span><small className="active celsius" >ºC</small>
                 </span>
            </span>
    }
}