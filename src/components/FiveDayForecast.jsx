import React from "react";
import "./fiveDayForecast.css";
import {
  capitalizeFirstLetters,
  getDayFromDate,
  getFirstTwoWords,
} from "../utils/helperMethods";

function FiveDayForecast({ unit, forecastData }) {
  return (
    <div className="five-day-forecast">
      <div className="heading">5-DAY FORECAST</div>
      <div className="list">
        {forecastData.map((item) => {
          const maxTemp =
            unit === "C"
              ? Math.round(item.day.maxtemp_c)
              : Math.round(item.day.maxtemp_f);
          const minTemp =
            unit === "C"
              ? Math.round(item.day.mintemp_c)
              : Math.round(item.day.mintemp_f);

          return (
            <React.Fragment key={item.date}>
              <div className="card">
                <div>{getDayFromDate(item.date)}</div>
                <div className="condition">
                  <img src={item.day.condition.icon} alt="weather-icon" />
                  <div>
                    {getFirstTwoWords(
                      capitalizeFirstLetters(item.day.condition.text)
                    )}
                  </div>
                </div>
                <div>
                  {maxTemp} / {minTemp} {unit === "C" ? "°C" : "°F"}
                </div>
              </div>
              <div className="separator"></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FiveDayForecast;
