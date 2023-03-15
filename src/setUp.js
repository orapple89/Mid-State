import { useState, useEffect } from "react";
import { cards } from "/public/cards.js";
import { players } from "/public/cards.js";
import { game } from "/public/cards.js";

export function SetUp() {
  var ctr, k, ctr2; //counters
  var cardDup;
  var player1Ctr = 1; //players[0].playerNum;
  var player2Ctr = players[1].playerNum;
  //var maxCards = 4;

  const [card, setCardOrder] = useState([]);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("cardNumber");
  const [player, setPlayer] = useState([]);

  function handleClick() {
    //SET CARD ORDER
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
      setCardOrder();
    }
    //SET PLAYER#

    for (ctr2 = 0; ctr2 < 8; ctr2++) {
      if (
        cards[ctr2].cardOrder === 1 && //player1Ctr &&
        players[0].numCards <= game.maxCards
      ) {
        cards[ctr2].player = 1;
        player1Ctr = player1Ctr + game.numberOfPlayers;
        players.numCards = players.numCards + 1;
      } else if (
        cards[ctr2].cardOrder === player2Ctr &&
        players.numCards <= game.maxCards
      ) {
        cards[ctr2].player = 2;
        player2Ctr = player2Ctr + game.numberOfPlayers;
        players.numCards = players.numCards + 1;
      }
      setPlayer(ctr2);
    } //end deal
  } //end shuffle and deal click

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
    <>
      <div className="App">
        <button className="square" onClick={handleClick}>
          Shuffle & Deal
        </button>
      </div>
      <div>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="cardNumb">Card Number</option>
          <option value="cardOrder">Card Order</option>
          <option value="player">Player</option>
        </select>
      </div>
      {data.map((card) => (
        <div key={card.cardNum} style={{ margin: "30px" }}>
          <div>{`Card Num: ${card.cardNum}`}</div>
          <div>{`Card Order: ${card.cardOrder}`}</div>
          <div>{`Player: ${card.player}`}</div>
        </div>
      ))}
      {data.map((card) => (
        <li key={card.cardNum}>
          {card.cardNum}, {card.cardName}, {card.cardOrder}, {card.player}
        </li>
      ))}
    </>
  );
}
