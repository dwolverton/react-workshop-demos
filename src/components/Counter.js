import React, { useState } from "react";
import "./Counter.css"; // Import CSS file

function Counter() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    // return the JSX that makes up this component
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <p className="Counter__buttons">
        <button onClick={() => setCount(count - 1)}>Down</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={countUp}>Up</button>
      </p>
    </div>
  );
}

export default Counter;
