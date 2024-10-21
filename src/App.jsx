import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import SearchPage from "./pages/Searchpage/SearchPage.jsx";

function App() {
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage unit={unit} toggleUnit={toggleUnit} />}
        />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
