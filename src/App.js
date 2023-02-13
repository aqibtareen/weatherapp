import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=696a07e37a6eb0c90b94921cd1ca7884`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setCity("");
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Weather Checker App </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button class="search-button" type="submit">Search</button>
      </form>
      {weather.main ? (
        <div className="weather-info">
          <p>
            <strong>Temperature: </strong>
            {(weather.main.temp - 273.15).toFixed(2)}°C
          </p>
          <p>
            <strong>Humidity: </strong>
            {weather.main.humidity}%
          </p>
          <p>
            <strong>Description: </strong>
            {weather.weather[0].description}
          </p>
        </div>
      ) : (
        <p>Please Enter The Name Of City To Get The Weather Information</p>
      )}
      <footer>
        <p>Made By Aqib Tareen</p>
      </footer>
    </div>
  );
}

export default App;
