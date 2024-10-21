import React from "react";
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

function Homepage({ unit, toggleUnit }) {
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
          <CurrentWeather unit={unit} />
          <div className="highlights">
            <section>
              <div className="top-section">
                <p className="text">Wind Status</p>
                <img className="card-icon" src={WindIcon} />
              </div>
              <div className="mid-section">7.90 Km/h</div>
              <div className="bottom-section">9:00 AM</div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">Humidity</p>
                <img className="card-icon" src={humidityIcon} />
              </div>
              <div className="mid-section">85%</div>
              <div className="bottom-section">Humidity</div>
            </section>
            <section className="medium-card">
              <img src={sunriseIcon} alt="sunriseIcon" />
              <div>
                <p>Sunrise</p>
                <p className="time">4:01 AM</p>
              </div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">UV</p>
                <img className="card-icon" src={uvICon} />
              </div>
              <div className="mid-section">0.5 UV</div>
              <div className="bottom-section">Moderate UV</div>
            </section>
            <section>
              <div className="top-section">
                <p className="text">Visibility</p>
                <img className="card-icon" src={visibilityIcon} />
              </div>
              <div className="mid-section">1.5 Km</div>
              <div className="bottom-section">9:00 AM</div>
            </section>

            <section className="medium-card">
              <img src={sunsetIcon} alt="sunsetIcon" />
              <div>
                <p>Sunset</p>
                <p className="time">6:20 PM</p>
              </div>
            </section>
          </div>
        </div>
        <div className="hourly-forecast-container">
          <HourlyForecast unit={unit} />
        </div>
      </div>
      <div className="forecast-container">
        <FiveDayForecast unit={unit} />
      </div>
    </div>
  );
}

export default Homepage;
