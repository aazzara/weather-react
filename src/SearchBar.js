import React, { useState } from "react";
import axios from 'axios';
import "./SearchBar.css";

export default function SearchBar() {
  
let [city, setCity] = useState("");
let [message, setmessage] = useState("");
function updateCity(event) {
  setCity(event.target.value);
  }

function handleClick(event) {
  event.preventDefault();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Metric
`;
  axios.get(url).then(getData);
  }
function getData(response) {
  
  alert(response.data.main.temp)
}
  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleClick}>
        <input
          className="col-6"
          id="changeCity"
          type="text"
          onChange={updateCity}
          placeholder="Change city"
          autocomplete="off"
        />
        <input type="submit" value="Search" className=" col-2 btn btn-light" />
        <input
          type="submit"
          value="Current Location"
          className="btn btn-info"
        />{" "}
      </form>
    </div>
  );
}