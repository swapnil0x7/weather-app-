import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import SearchPage from "./pages/Searchpage/SearchPage.jsx";

function App() {
  const [unit, setUnit] = useState("C");
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
  }, []);

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

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              unit={unit}
              toggleUnit={toggleUnit}
              weatherData={weatherData}
              error={error}
            />
          }
        />
        <Route
          path="/search"
          element={<SearchPage fetchWeatherData={fetchWeatherData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
