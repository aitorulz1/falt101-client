import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR,
  LOGIN,
  LOGIN_EXITO,
  LOGIN_ERROR,
} from "../types";

import clienteAxios from "../service/axios";

// ----------- Registrar nuevo usuario -----------

export function crearNuevoUsuario(usuario) {
  return (dispatch) => {
    dispatch(agregarUsuario());
    try {
      clienteAxios.post("/users", usuario);
      dispatch(agregarUsuarioExito(usuario));
      console.log(usuario);
    } catch (error) {
      dispatch(agregarUsuarioError(true));
      console.log("algo falla");
    }
  };
}

const agregarUsuario = () => ({
  type: AGREGAR_USUARIO,
  payload: true,
});

const agregarUsuarioExito = (usuario) => ({
  type: AGREGAR_USUARIO_EXITO,
  payload: usuario,
});

const agregarUsuarioError = (estado) => ({
  type: AGREGAR_USUARIO_ERROR,
  payload: estado,
});
