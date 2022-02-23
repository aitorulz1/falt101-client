import React from "react";
import "./css/Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-container">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="/">inicio</Link>
          <Link to="/form">form</Link>
          <Link to="/flats">flats</Link>
        </ul>
      </div>
    </div>
  );
}
