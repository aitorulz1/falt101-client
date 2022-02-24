import React, { useState, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { crearNuevoFlat } from "../../actions/flatActions";
import Nav from "../Layout/Header/Nav";
import clienteAxios from "../../service/axios";
import "./css/NuevoFlat.css";
import Logo from "../../assets/logo.png";
import Bath from "../../assets/bath.jpg";

export default function NuevoFlat(props) {
  const [flat, setFlat] = useState({
    name: "",
    flatPicture: "",
    price: 0,
    type: "",
  });

   console.log(props)

  const { name, price, type } = flat;

  const [types, getTypes] = useState([]);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const agregarFlat = (newflat) => dispatch(crearNuevoFlat(newflat));

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await clienteAxios.get("/flats/types");
        getTypes(respuesta.data);
        console.log(types);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

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
      return;
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

      props.history.push("/");
  };

  return (
    <Fragment>
      <Nav />
      <div className="form-container">
        <div className="form-content">
          <div className="form-header-container">
            <img src={Logo} />
            <p>Upload Your Products</p>
            <img className="bath" src={Bath} />
          </div>
          <form onSubmit={onSubmit}>
            <div className="">
              <input
                className="input-form"
                type="text"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="input-form">
              <input
                className="input-file"
                type="file"
                name="flatPicture"
                onChange={onChange}
              />
            </div>
            <div className="input-form">
              <label className="precio">...price...</label>
              <input
                className="input-form"
                placeholder="price"
                type="number"
                min="0"
                max="1000000"
                name="price"
                value={price}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="send">
              Send
            </button>
            {/* <input className="" type="submit" value="Enviar" /> */}
          </form>
          {error ? (
            <p className="alert">Debe de completar todos los campos</p>
          ) : null}          
        </div>
      </div>
    </Fragment>
  );
}
