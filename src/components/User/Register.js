import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearNuevoUsuario } from "../../actions/authActions";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const agregarUsuario = (usuario) => dispatch(crearNuevoUsuario(usuario));

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError(true);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    agregarUsuario({
      name,
      email,
      password,
    });
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
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
          <label className="">Email</label>
          <input
            className=""
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="">
          <label className="">Password</label>
          <input
            className=""
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input className="" type="submit" value="Enviar" />
      </form>
      {error ? <p className="">Todos los campos son obligatorios</p> : null}
    </div>
  );
}
