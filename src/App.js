//import { useState, useEffect } from "react";
import "./app.css";
//import { cards } from "/public/cards.js";
import { ShuffleDeck } from "./shuffle.js";
import { DealCards } from "./deal.js";

function App() {
  return (
    <div className="App">
      <ShuffleDeck />
      <DealCards />
    </div>
  );
}

export default App;
