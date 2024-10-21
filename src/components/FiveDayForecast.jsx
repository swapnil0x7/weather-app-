import React from "react";
import "./fiveDayForecast.css";
import { capitalizeFirstLetters, getDayFromDate } from "../utils/helperMethods";

function FiveDayForecast({ unit, forecastData }) {
  return (
    <div className="five-day-forecast">
      <div className="heading">5-DAY FORECAST</div>
      <div className="list">
        {forecastData.map((item) => {
          return (
            <>
              <div className="card" key={item.hour}>
                <div>{getDayFromDate(item.date)}</div>
                <div className="condition">
                  <img src={item.day.condition.icon} alt="weather-icon" />
                  <div>{capitalizeFirstLetters(item.day.condition.text)}</div>
                </div>
                <div>
                  {Math.round(item.day.maxtemp_c)} /{" "}
                  {Math.round(item.day.mintemp_c)}
                </div>
              </div>
              <div className="separator"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default FiveDayForecast;
