import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-form">
        <input
          className="col-6"
          id="changeCity"
          type="text"
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