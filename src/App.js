//import { useState, useEffect } from "react";
import "./app.css";
//import { cards } from "/public/cards.js";
import { ShuffleDeck } from "./shuffle.js";

function App() {
  return (
    <div className="App">
      <ShuffleDeck />
    </div>
  );
}

export default App;
