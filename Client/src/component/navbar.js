import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export function NavBar(){

  return (
  <div className="main-nav">
    <ul>
      <li><a href="#">Logo</a></li>
      <li className="logIn"><a href="#">Log In!</a></li>
    </ul>
  </div>);
}