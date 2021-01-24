import React from "react";
import "./Weather.css";

function Weather({ time, conditions, tempF }) {
  const tempC = fahrenheitToCelsius(tempF);

  return (
    <div className="Weather">
      {time && <h3>Weather for {time}</h3>}
      <p>{conditions}</p>
      <p>
        Temperature: {tempF}F ({tempC}C)
      </p>
    </div>
  );
}

function fahrenheitToCelsius(tempF) {
  return Math.round(((tempF - 32) * 5) / 9);
}

export default Weather;
