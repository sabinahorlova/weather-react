import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3a654bc3e678a3417911bfe908b59193";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (loaded === true) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control search-input"
                autoFocus={true}
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn w-100" value="Search" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weather.name}</h1>
            <ul>
              <li>{weather.description}</li>
              <li>
                Humidity:
                <span className="humidity">{weather.humidity}%</span>
              </li>
              <li>
                Wind: <span className="wind">{weather.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                class="form-control search-input"
                autoFocus={true}
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn w-100" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
