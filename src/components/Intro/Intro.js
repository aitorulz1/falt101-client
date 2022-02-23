import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_black.jpeg";
import Bath from "../../assets/bath.png";
import "./Intro.css";

export default function Home() {
  var tabs = [
    "Taps",
    "Sinks",
    "Bathtubs",
    "Tubs",
    "Showerheads",
    "Showers",
    "Baths",
  ];

  const [length, setLength] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setLength((length) => (length === 6 ? 0 : length + 1));
    }, 750);
  }, [setLength]);

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={Logo} />
        <div className="welcome">
          <h2>Welcome to our Bath App</h2>
          <img src={Bath} />
          <p>
            {" "}
            Get into the app where you will find all the different bathroom
            widgets so you can upload yours and stablish the price you consider!
          </p>
        </div>
        <div className="bathElements">
          <p>{tabs[length]}</p>
        </div>
        <Link className="button" to="/flats">
          Flats
        </Link>
      </div>
    </div>
  );
}
