import React, { useState } from "react";
import Keypad from "./Keypad";

function CodeEntry() {
  const [code, setCode] = useState("");

  return (
    <div className="CodeEntry">
      <h2>Enter Code</h2>
      <p>{code || "...."}</p>
      <Keypad />
    </div>
  );
}

export default CodeEntry;
