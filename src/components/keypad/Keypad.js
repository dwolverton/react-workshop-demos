import React from "react";
import "./Keypad.css";

const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

function Keypad({ onKey }) {
  return (
    <div className="Keypad">
      {values.map((val) => (
        <button key={val} onClick={() => onKey(val)}>
          {val}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
