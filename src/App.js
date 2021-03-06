import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import City from "./City";
import RightNow from "./RightNow";
import OtherStats from "./OtherStats";
import Forecast from "./Forecast";
import Footer from "./Footer";
//import Weather from "./Weather"

function App(props) {
let [ready, setReady] = useState(false);
let [city, setCity] = useState(props.defaultCity);
let [weatherData, setWeatherData] = useState({});

function getData(response){
setReady(true);
setWeatherData({
  temperature: response.data.main.temp,
  city: response.data.name,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  description: response.data.weather[0].description,
  date: "Wednesday 11pm",
  icon: ""
} )
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function updateCity(event){
setCity(event.target.value);
}

function search(){
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e57aed5a3752290f9e3c0dd1d0ad914d&units=Metric
`;
  axios.get(url).then(getData);
}

if (ready){
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
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
          <br />
          <div className="row">
            <div className="col">
              <City data={weatherData}/>
            </div>
            <div className="col temp">
              <RightNow data={weatherData}/>
              <OtherStats data={weatherData}/>
            </div>
          </div>
          <br />
          <div className="row">
          <div className="col forecast"><Forecast /></div>
          <div className="col forecast"><Forecast /></div>
          <div className="col forecast"><Forecast /></div>
          <div className="col forecast"><Forecast /></div>
          <div className="col forecast"><Forecast /></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} else {
  search();
  }
return ("Loading...")
}

export default App;
