import { useState, useEffect } from "react";
import { cards } from "/public/cards.js";

export function DealCards() {
  var ctr;
  var player1Ctr = 1;
  var player2Ctr = 2;
  var maxCards = 10;
  const [player, setPlayer] = useState(null);

  function handleClick() {
    for (ctr = 0; ctr < 108; ctr++) {
      if (
        cards[ctr].cardOrder === player1Ctr &&
        players.members[0].numCards < maxCards + 1
      ) {
        cards[ctr].player = 1;
        player1Ctr = player1Ctr + players.numberOfPlayers;
        players.members[0].numCards = players.members[0].numCards + 1;
      } else if (
        cards[ctr].cardOrder === player2Ctr &&
        players.members[1].numCards < maxCards + 1
      ) {
        cards[ctr].player = 2;
        player2Ctr = player2Ctr + players.numberOfPlayers;
        players.members[1].numCards = players.members[1].numCards + 1;
      }
      setPlayer(ctr);
    }
  }

  const cDeal = cards.map((card) => (
    <li key={card.cardNum}>
      {card.cardNum}, {card.cardOrder}, {card.cardName}, {card.player}
    </li>
  ));

  return (
    <>
      <button className="square" onClick={handleClick}>
        Deal
      </button>
      <ul>{cDeal}</ul>
    </>
  );
}
