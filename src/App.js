import React from "react";
import './App.css';
import SearchBar from "./SearchBar";
import City from "./City";
import RightNow from "./RightNow";
import OtherStats from "./OtherStats";
import Forecast from "./Forecast";
import Footer from "./Footer";
//import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <SearchBar />
          <br />
          <div className="row">
            <div className="col">
              <City />
            </div>
            <div className="col temp">
              <RightNow />
              <OtherStats />
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
}

export default App;
