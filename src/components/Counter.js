import React from "react";
import "./Counter.css"; // Import CSS file

function Counter() {
  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>0</p>
      <p>
        <button>Down</button>
        <button>Reset</button>
        <button>Up</button>
      </p>
    </div>
  );
}

export default Counter;
