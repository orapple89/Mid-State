import { useState, useEffect } from "react";
import { cards } from "/public/cards.js";
import { players } from "/public/cards.js";
import { game } from "/public/cards.js";

export function DealCards() {
  var ctr;
  var player1Ctr = 1;
  var player2Ctr = 2;
  var maxCards = 10;
  const [player, setPlayer] = useState(null);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("cardNumber");

  function handleClick() {
    for (ctr = 0; ctr < 108; ctr++) {
      if (
        cards[ctr].cardOrder === player1Ctr &&
        players[0].numCards < maxCards + 1
      ) {
        cards[ctr].player = 1;
        player1Ctr = player1Ctr + players.numberOfPlayers;
        players[0].numCards = players[0].numCards + 1;
      } else if (
        cards[ctr].cardOrder === player2Ctr &&
        players[1].numCards < maxCards + 1
      ) {
        cards[ctr].player = 2;
        player2Ctr = player2Ctr + players.numberOfPlayers;
        players[1].numCards = players[1].numCards + 1;
      }
      setPlayer(ctr);
    }
  }

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
      <button className="square">Shuffle</button>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="cardNumb">Card Number</option>
        <option value="cardOrder">Card Order</option>
        <option value="player">Player</option>
      </select>
      <button className="square" onClick={handleClick}>
        Deal
      </button>
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
