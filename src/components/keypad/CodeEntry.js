import React, { useState } from "react";
import Keypad from "./Keypad";

function CodeEntry() {
  const [code, setCode] = useState("");

  function appendCode(number) {
    setCode(code + number);
  }

  return (
    <div className="CodeEntry">
      <h2>Enter Code</h2>
      <p>{code || "...."}</p>
      <Keypad onKey={appendCode} />
    </div>
  );
}

export default CodeEntry;
