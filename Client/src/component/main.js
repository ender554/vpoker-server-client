import React from "react";
import { Link } from "react-router-dom";

import './main.css';
const Main = props => {
  // if(this.props.user.loggIn){
    return (
      <div className="button-navs">
        <Link to='/game'><button>New Game</button></Link>
        <Link to='/userHistory'><button>View History</button></Link>
        <Link to='/userNotes'><button>View Notes</button></Link>
        <Link to='/training'><button>New Training</button></Link>
      </div>
    )
  }
  // else return(
  //   <div className="button-navs"></div>
  // )
// }

export default Main;