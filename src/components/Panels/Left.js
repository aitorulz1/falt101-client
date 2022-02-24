import React from "react";
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import "./css/Left.css";

export default function Left() {
  const flats = useSelector((state) => state.flats.flats);

  return (
    <div className="left-container">
      <div className="left-content">
        <p>
          Productos ({flats.length}){" "}
          <span className="arrow">
            <FaAngleDown />
          </span>
        </p>
      </div>
    </div>
  );
}
