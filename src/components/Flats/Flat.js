import React, { Fragment } from "react";
import "./css/Flat.css";

export default function Flat({ flat }) {
  const { name, price, flatPicture } = flat;

  const nameSpecial = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Fragment>
      <li>
        <div className="imag-cont">
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
