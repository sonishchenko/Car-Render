"use client";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState([
    "Tesla Model S",
    "BMW i8",
    "Audi e-tron",
    "Porsche Taycan",
    "Nissan Leaf",
  ]);
  const [input, setInput] = useState("");

  console.log(state);

  return (
    <main>
      <h1>Random Cars</h1>
      <ul>
        {state.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>

      <input
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          width: "200px",
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{
          marginLeft: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          setState([...state, input]);
        }}
      >
        Add
      </button>
      <button
        style={{
          marginLeft: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          setState(state.filter((car) => car !== input));
        }}
      >
        Delete
      </button>
    </main>
  );
}
