import React from "react";

export default function FormatDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(props.data);
    //let day = days[props.data.getDay()];
   // let hours = props.data.getHours();
   // let minutes = props.data.getMinutes();
   // if (minutes < 10) {
   //     minutes = `0${minutes}`
    
    return (
        <div>day hours:minutes</div>)
}