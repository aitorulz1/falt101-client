import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearNuevoFlat } from "../../actions/flatActions";

export default function NuevoFlat({ history }) {
  const [flat, setFlat] = useState({
    name: "",
    flatPicture: "",
    price: 0,
  });

  const { name, flatPicture, price } = flat;

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const agregarFlat = (newflat) => dispatch(crearNuevoFlat(newflat));

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
      setError(true);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    const data = new FormData();
    data.append("file", flat.flatPicture);
    data.append("upload_preset", "portfolio-aitor");
    data.append("cloud_name", "aitorcloud");
    fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((file) => {
        // console.log(file.secure_url);
        // console.log(file);

        agregarFlat({
          name,
          flatPicture: file.secure_url,
          price,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setFlat({
      name: "",
      flatPicture: "",
      price: 0,
    });
  };

  const goto = () => {
    history.push("/flats");
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

        <button type="submit" onClick={goto}>
          Enviar
        </button>
        {/* <input className="" type="submit" value="Enviar" /> */}
      </form>
      {error ? <p className="">Debe de completar todos los campos</p> : null}
    </div>
  );
}
