import React from "react";
import "./Color.css";

function Color({ color }) {
  return (
    <button
      className="Color"
      style={{ backgroundColor: color }}
      onClick={null}
    ></button>
  );
}

export default Color;
