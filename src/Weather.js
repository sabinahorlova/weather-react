import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The wethetr in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "3a654bc3e678a3417911bfe908b59193";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello Weather</h2>;
}
