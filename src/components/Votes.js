import React, { useState } from "react";
import "./Votes.css";

function Votes() {
  const [chocolate, setChocolate] = useState(0);
  const [vanilla, setVanilla] = useState(0);
  const [strawberry, setStrawberry] = useState(0);

  const total = chocolate + vanilla + strawberry;
  const percentages = {
    chocolate: percentage(chocolate, total),
    vanilla: percentage(vanilla, total),
    strawberry: percentage(strawberry, total)
  };

  return (
    <div className="Votes">
      <p>
        <label>Chocolate:</label> {chocolate} ({percentages.chocolate})
      </p>
      <div
        className="Votes__bar Votes__bar--chocolate"
        style={{ width: percentages.chocolate }}
      ></div>
      <p>
        <label>Vanilla:</label> {vanilla} ({percentages.vanilla})
      </p>
      <div
        className="Votes__bar Votes__bar--vanilla"
        style={{ width: percentages.vanilla }}
      ></div>
      <p>
        <label>Strawberry:</label> {strawberry} ({percentages.strawberry})
      </p>
      <div
        className="Votes__bar Votes__bar--strawberry"
        style={{ width: percentages.strawberry }}
      ></div>
      <div className="Buttons">
        <button onClick={() => setChocolate(chocolate + 1)}>Chocolate</button>
        <button onClick={() => setVanilla(vanilla + 1)}>Vanilla</button>
        <button onClick={() => setStrawberry(strawberry + 1)}>
          Strawberry
        </button>
      </div>
    </div>
  );
}

function percentage(n, total) {
  if (total === 0) {
    return "0.0%";
  }
  return ((n / total) * 100).toFixed(1) + "%";
}

export default Votes;
