// 1. Import counter component
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather time="Today" conditions="Overcast" tempF={28} />
      <Weather time="Tomorrow" conditions="Sunny" tempF={78} />
      <Switch />
      <Switch />
      <Counter />
      <Votes />
    </div>
  );
}
