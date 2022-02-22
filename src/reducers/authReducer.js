import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR,
  LOGIN,
  LOGIN_EXITO,
  LOGIN_ERROR,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: [],
  authenticated: false,
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_USUARIO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: action.payload,
        loading: false,
      };
    case AGREGAR_USUARIO_EXITO:
      return {
        ...state,
        user: action.payload,
      };
    case AGREGAR_USUARIO_ERROR:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
