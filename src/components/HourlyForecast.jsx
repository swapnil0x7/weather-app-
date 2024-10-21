import React from "react";
import "./hourlyForecast.css";
import { formatTimeTo12Hour } from "../utils/helperMethods";

function HourlyForecast({ unit, hourlyData }) {
  return (
    <div className="hourly-forecast-container">
      <div className="heading">TODAY'S FORECAST</div>
      <div className="list">
        {hourlyData
          .filter((_, index) => index % 3 === 0)
          .slice(2, 8)
          .map((item, key) => {
            return (
              <div className="card" key={item.hour}>
                <div className="time">{formatTimeTo12Hour(item.time)}</div>
                <div className="condition">
                  <img src={item.condition.icon} alt="weather-icon" />
                </div>
                <div className="temperature">
                  {unit === "C"
                    ? `${Math.round(item.temp_c)}°C`
                    : `${Math.round(item.temp_f)}°F`}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HourlyForecast;
