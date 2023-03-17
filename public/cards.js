export var game = {
  numberPlayers: 5,
  round: 1,
  turn: 1,
  maxCards: 6,
  cardsDealt: 0,
  player1Ctr: 1,
  player2Ctr: 2,
  player3Ctr: null,
  player4Ctr: null,
  player5Ctr: null
};

export var players = [
  {
    playerNum: 1,
    userName: "Available",
    score: 0,
    numCards: 0
  },
  {
    playerNum: 2,
    userName: "Available",
    score: 0,
    numCards: 0
  },
  {
    playerNum: 3,
    userName: "Available",
    score: 0,
    numCards: 0
  },
  {
    playerNum: 4,
    userName: "Available",
    score: 0,
    numCards: 0
  },
  {
    playerNum: 5,
    userName: "Available",
    score: 0,
    numCards: 0
  }
];
export var cards = [
  {
    cardNum: 1,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 2,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 3,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 4,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 5,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 6,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 7,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  },
  {
    cardNum: 8,
    cardOrder: null,
    player: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: "tempura",
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    pic: "/images/tempura.png"
  }
];
