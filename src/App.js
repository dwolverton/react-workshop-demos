// 1. Import counter component
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch />
      <Switch />
      {/* 2. Insert Counter component */}
      <Counter />
      <h2>Another One...</h2>
      <Counter />
    </div>
  );
}
