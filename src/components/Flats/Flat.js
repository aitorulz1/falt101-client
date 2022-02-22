import React from "react";

export default function Flat({ flat }) {
  const { name, price, flatPicture } = flat;

  return (
    <>
      <ul>
        <li>
          {name}
          {price}
          <img src={flatPicture} />
        </li>
      </ul>
    </>
  );
}
