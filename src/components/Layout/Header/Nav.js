import React from "react";
import Menu from "./Menu";
import MenuDesk from "./MenuDesktop";
import Profile from "./Profile";
import Searcher from "./Searcher";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <Menu />
      <MenuDesk />
      <Profile />
      <Searcher />
    </div>
  );
}
