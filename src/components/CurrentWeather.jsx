import React, { useState, useEffect } from "react";
import "./currentWeather.css";

function CurrentWeather({ unit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch weather data from the API
  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           fetchWeatherData(latitude, longitude);
  //         },
  //         (error) => {
  //           setError("Unable to retrieve your location");
  //         }
  //       );
  //     } else {
  //       setError("Geolocation is not supported by your browser.");
  //     }
  //   }, [unit]);
  useEffect(() => {
    const bangaloreCoordinates = {
      latitude: 12.9716,
      longitude: 77.5946,
    };

    fetchWeatherData(
      bangaloreCoordinates.latitude,
      bangaloreCoordinates.longitude
    );
  }, [unit]);

  // Function to fetch weather data from the WeatherAPI
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5cec91c1badf4f9ab2f101547242010&q=${lat},${lon}&aqi=no&days=5`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

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
