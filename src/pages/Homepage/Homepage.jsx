import React, { useEffect, useState } from "react";
import CurrentWeather from "../../components/CurrentWeather.jsx";
import HourlyForecast from "../../components/HourlyForecast.jsx";
import FiveDayForecast from "../../components/FiveDayForecast.jsx";
import UnitToggle from "../../components/UnitToggle.jsx";
import { Link } from "react-router-dom";
import "./homepage.css";
import Button from "../../components/Buttons/Button.jsx";
import WindIcon from "../../assets/windIcon.svg";
import humidityIcon from "../../assets/humidityIcon.svg";
import uvICon from "../../assets/uvIcon.svg";
import visibilityIcon from "../../assets/visibilityIcon.svg";
import sunriseIcon from "../../assets/sunrise.svg";
import sunsetIcon from "../../assets/sunset.svg";
import { formatTimeTo12Hour } from "../../utils/helperMethods.js";
import Lottie from "lottie-react";
import Loader from "../../assets/loader.json";

function Homepage({ unit, toggleUnit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, [unit]);

  // Function to fetch weather data from the WeatherAPI
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=5cec91c1badf4f9ab2f101547242010&q=${lat},${lon}&aqi=no&days=5`
      );
      const data = await response.json();
      console.log("DATA: ", data);
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return (
      <div className="loading-spinner">
        <Lottie animationData={Loader} />
        <p>Hang in there, storming through the data.</p>
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div className="weather-container">
        <div className="btn-container">
          <UnitToggle unit={unit} toggleUnit={toggleUnit} />
          <Link to="/search">
            <Button label="Search for cities" />
          </Link>
        </div>
        <div className="current-container">
          <CurrentWeather unit={unit} weatherData={weatherData} />
          <div className="highlights">
            <section>
              <div className="top-section">
                <p className="text">Wind Status</p>
                <img className="card-icon" src={WindIcon} />
              </div>
              <div className="mid-section">
                {weatherData.current.wind_kph} Km/h
              </div>
              <div className="bottom-section">
                {formatTimeTo12Hour(weatherData.current.last_updated)}
              </div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">Humidity</p>
                <img className="card-icon" src={humidityIcon} />
              </div>
              <div className="mid-section">{weatherData.current.humidity}%</div>
              <div className="bottom-section">Humid</div>
            </section>
            <section className="medium-card">
              <img src={sunriseIcon} alt="sunriseIcon" />
              <div>
                <p>Sunrise</p>
                <p className="time">
                  {weatherData.forecast.forecastday[0].astro.sunrise}
                </p>
              </div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">UV</p>
                <img className="card-icon" src={uvICon} />
              </div>
              <div className="mid-section">{weatherData.current.uv} UV</div>
              <div className="bottom-section">Moderate UV</div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">Visibility</p>
                <img className="card-icon" src={visibilityIcon} />
              </div>
              <div className="mid-section">{weatherData.current.vis_km} Km</div>
              <div className="bottom-section">
                {formatTimeTo12Hour(weatherData.current.last_updated)}
              </div>
            </section>
            <section className="medium-card">
              <img src={sunsetIcon} alt="sunsetIcon" />
              <div>
                <p>Sunset</p>
                <p className="time">
                  {weatherData.forecast.forecastday[0].astro.sunset}
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="hourly-forecast-container">
          <HourlyForecast
            unit={unit}
            hourlyData={weatherData.forecast.forecastday[0].hour}
          />
        </div>
      </div>
      <div className="forecast-container">
        <FiveDayForecast
          unit={unit}
          forecastData={weatherData.forecast.forecastday}
        />
      </div>
    </div>
  );
}

export default Homepage;
