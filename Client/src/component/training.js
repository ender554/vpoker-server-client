import React from 'react';
import { Link } from "react-router-dom";

import './training.css';

// import Deck from "react-poker";
const { decks } = require('cards');


const deck = new decks.StandardDeck({ jokers: 0 });


function deckRender(hand) {
  
  let cardList = '<ul class="hand">';
  for (let i = 0; i < 5; i++) {
    cardList += `<li key= ${i}>`;
    cardList += (`${hand[i].rank.shortName} ${hand[i].suit.name} </li>`);

  }
  return cardList += '</ul>';
};

export function Training() {
  deck.shuffleAll();
  const hand = deck.draw(5);
  return (
    <div className="deal"><Link to='/training'><button>Deal</button></Link>
      <div className="game-component" >
        {document.write(deckRender(hand))}
      </div>
    </div>
  );
}