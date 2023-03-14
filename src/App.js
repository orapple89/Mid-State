import { useState, useEffect } from "react";
import "./app.css";
import { cards } from "/public/cards.js";

function ShuffleDeck() {
  var ctr, k; //counters
  var cardDup;
  const [cardOrder, setCardOrder] = useState([]);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("cardNumber");

  //SET CARD ORDER
  function handleClick() {
    for (ctr = 0; ctr < 8; ctr++) {
      //need to reset to 108
      do {
        cardDup = 0;
        cards[ctr].cardOrder = 1 + Math.floor(Math.random() * 8); //(rand() % 108) + 1;
        //^need to reset to 108
        for (k = 0; k < ctr; k++) {
          // start 2nd DUP loop
          if (cards[ctr].cardOrder === cards[k].cardOrder) {
            cardDup = 1;
          }
        }
      } while (cardDup === 1);
      setCardOrder(ctr);
    }
    //console.log("Y" + cards);
  } //end sort click
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        cardNum: "cardNum",
        cardOrder: "cardOrder",
        player: "player"
      };
      const sortProperty = types[type];
      const sorted = [...cards].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      console.log(sorted);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <button className="square" onClick={handleClick}>
        Shuffle
      </button>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="cardNumb">Card Number</option>
        <option value="cardOrder">Card Order</option>
        <option value="player">Player</option>
      </select>
      {data.map((card) => (
        <div key={card.cardNum} style={{ margin: "30px" }}>
          <div>{`Card Num: ${card.cardNum}`}</div>
          <div>{`Card Order: ${card.cardOrder}`}</div>
          <div>{`Player: ${card.player}`}</div>
        </div>
      ))}
      {data.map((card) => (
        <li key={card.cardNum}>
          {card.cardNum}, {card.cardName}, {card.cardOrder},
        </li>
      ))}
      )
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ShuffleDeck />
    </div>
  );
}

export default App;
