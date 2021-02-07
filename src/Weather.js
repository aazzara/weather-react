import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function getData(response) {
        alert(`The temperature in ${response.data.name} is ${response.data.main.temp}`)
    }
let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Metric
`;
axios.get(url).then(getData);
    return(<p>Look up the weather in {props.city}</p>)
}
