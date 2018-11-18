import React from "react";
import { Link } from "react-router-dom";

import './main.css';
let Main = props => {
  return(
    <div className="button-navs">
      <Link to='/cards'><button>New Game</button></Link>
      <Link to='/userHistory'><button>View History</button></Link>
      <Link to='/userNotes'><button>View Notes</button></Link>
      <Link to='/training'><button>New Training</button></Link>


    </div>
  )
}

export default Main;