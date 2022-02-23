import React from "react";
import { Link } from "react-router-dom";
import "./css/MenuDesktop.css";

export default function MenuDesktop() {
  return (
    <div class="menu-desktop">
      <div class="menu-desktop-content">
        <Link to="/">inicio</Link>
        <Link to="/form">form</Link>
        <Link to="/flats">flats</Link>
      </div>
    </div>
  );
}
