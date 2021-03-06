import React from 'react';
import { Link } from "react-router-dom";

import './training.css';

// import Deck from "react-poker";
const { decks } = require('cards');


const deck = new decks.StandardDeck({ jokers: 0 });

function change(card){
  console.log(card.rank.shortName + card.suit.name);
}

function deckRender(hand) {
  return hand.map((card, i) => {
    return <li key={i}><button onClick={change(card)}>{card.rank.shortName} {card.suit.name}</button> </li>
  }
  )
};

export function Training() {
  deck.shuffleAll();
  const hand = deck.draw(5);
  // console.log(hand);
  return (
    <div className="deal"><Link to='/training'><button>Deal</button></Link>
      <div className="game-component" >
        <ul className="hand">
          {(deckRender(hand))}
        </ul>
        <button>Confirm</button>
      </div>
    </div>
  );
}