import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordenarFlatsAlfa, ordenarFlatsPrice } from "../../actions/flatActions";
import { FaAngleDown } from "react-icons/fa";
import "./css/Right.css";

export default function Right() {
  const dispatch = useDispatch();

  const flats = useSelector((state) => state.flats.flats);

  return (
    <li class="right-container">
      ORDENAR POR
      <span className="arrow">
        <FaAngleDown />
      </span>
      <ul class="submenu">
        <li>
          <button
            className="filter"
            onClick={() => dispatch(ordenarFlatsAlfa())}
          >
            A to Z
          </button>
        </li>
        <li>
          <button
            className="filter"
            onClick={() => dispatch(ordenarFlatsPrice())}
          >
            Cheaper to Expensive
          </button>
        </li>
      </ul>
    </li>
  );
}
