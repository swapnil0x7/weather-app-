import React, { useState, useEffect } from "react";
import "./currentWeather.css";

function CurrentWeather({ unit, weatherData }) {

  const temperature =
    unit === "C" ? weatherData.current.temp_c : weatherData.current.temp_f;
  const weatherIcon = weatherData.current.condition.icon;
  const weatherDescription = weatherData.current.condition.text;

  return (
    <div className="current-weather">
      <div className="location">
        <div>
          <div className="heading">{`${weatherData.location.name}`}</div>
          <div className="subheading">{`${weatherData.location.region}, ${weatherData.location.country}`}</div>
        </div>
        <div></div>
        <div className="icon">
          <div className="top-section">
            <img src={weatherIcon} alt={weatherDescription} />
            <p className="description">{weatherDescription}</p>
          </div>
          <p className="value">
            {temperature}°{unit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
