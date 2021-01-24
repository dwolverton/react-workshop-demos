import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import "./styles.css";

export default function App() {
  const [weatherList, setWeatherList] = useState([]);

  // run code only once when the component first loads
  useEffect(() => {
    fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
      .then((res) => res.json())
      .then((data) => {
        // Set the state with the data we need.
        setWeatherList(data.properties.periods);
      });
  }, []);

  return (
    <div className="App">
      {weatherList.map((wx) => (
        <Weather
          key={wx.number}
          time={wx.name}
          tempF={wx.temperature}
          conditions={wx.shortForecast}
        />
      ))}
      {/* <Weather time="Today" conditions="Overcast" tempF={28} />
      <Weather time="Tomorrow" conditions="Sunny" tempF={78} />
      <Weather conditions="Sunny" tempF={78} /> */}
      <Switch />
      <Switch />
      <Counter />
      <Votes />
    </div>
  );
}
