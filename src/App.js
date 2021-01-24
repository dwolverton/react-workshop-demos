import React, { useState } from "react";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import "./styles.css";

export default function App() {
  const [weatherList, setWeatherList] = useState([
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ]);

  return (
    <div className="App">
      {weatherList.map((wx) => (
        <Weather
          key={wx.time}
          time={wx.time}
          tempF={wx.highF}
          conditions={wx.conditions}
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
