import React from 'react';
import { Link } from "react-router-dom";

import './training.css';

// import Deck from "react-poker";
const { decks } = require('cards');


const deck = new decks.StandardDeck({ jokers: 0 });


function deckRender(hand) {
  // for (let i = 0; i < hand.size; i++) {
  //   cardList += `<li key= ${i}>`;
  //   cardList += (`${hand[i].rank.shortName} ${hand[i].suit.name} </li>`);

  // }
  return hand.map((card, i) => {

    return <li key={i}> {card.rank.shortName} {card.suit.name} </li>
  }
  )
};

export function Training() {
  deck.shuffleAll();
  const hand = deck.draw(5);
  console.log(hand);
  return (
    <div className="deal"><Link to='/training'><button>Deal</button></Link>
      <div className="game-component" >
        <ul className="hand">
          {(deckRender(hand))}
        </ul>
      </div>
    </div>
  );
}