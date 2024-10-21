import React from "react";

function UnitToggle({ unit, toggleUnit }) {
  return (
    <div>
      <button className="button" onClick={toggleUnit}>
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default UnitToggle;
