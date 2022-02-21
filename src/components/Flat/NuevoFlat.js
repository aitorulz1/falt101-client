import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoFlat } from "../../actions/flatActions";

export default function NuevoFlat() {
  const [flat, setFlat] = useState({
    name: "",
    flatPicture: "",
    price: 0,
  });

  const { name, flatPicture, price } = flat;

  const dispatch = useDispatch();

  const agregarFlat = (producto) => dispatch(crearNuevoFlat(producto));

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setFlat({
      ...flat,
      [name]: files ? files[0] : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      console.log("Mal");
    }

    agregarFlat({
      name,
      flatPicture,
      price,
    });

    setFlat({
      name: "",
      flatPicture: "",
      price: 0,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="">
          <label className="">Nombre</label>
          <input
            className=""
            type="text"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="">
          <label className="">Imagen</label>
          <input
            className=""
            type="file"
            name="flatPicture"
            onChange={onChange}
          />
        </div>
        <div className="">
          <label className="">Precio</label>
          <input
            className=""
            type="number"
            min="0"
            max="1000000"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>

        <input className="" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
