// 1. Import counter component
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <Switch />
      <Switch />
      <Counter />
      <Votes />
    </div>
  );
}
