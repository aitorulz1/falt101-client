import React, { Fragment, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./css/Flat.css";

export default function Flat({ flat }) {
  const { name, price, flatPicture } = flat;

  const nameSpecial = name.charAt(0).toUpperCase() + name.slice(1);

  const [clicked, setClicked] = useState(false);
  const heartClicked = () => {
    setClicked(!clicked);
  };

  return (
    <Fragment>
      <li>
        <div className="imag-cont">
          <div className="heart-container">
            <button className="heart" onClick={heartClicked}>
              {!clicked ? <FaRegHeart /> : <FaHeart />}
            </button>
          </div>
          <img src={flatPicture} />
        </div>
        <div className="name">{nameSpecial}</div>
        <div className="price">
          £ {price}.00 / m<sup>2</sup>
        </div>
      </li>
    </Fragment>
  );
}
