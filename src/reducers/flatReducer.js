import {
  AGREGAR_FLAT,
  AGREGAR_FLAT_EXITO,
  AGREGAR_FLAT_ERROR,
  COMENZAR_DESCARGA_FLAT,
  OBTENER_FLAT_EXITO,
  OBTENER_FLAT_ERROR,
  ORDENAR_ALFA,
  ORDENAR_PRICE,
} from "../types";

const initialState = {
  flats: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_FLAT:
    case AGREGAR_FLAT:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_FLAT_EXITO:
      return {
        ...state,
        loading: false,
        flats: [...state.flats, action.payload],
        error: false,
      };
    case OBTENER_FLAT_ERROR:
    case AGREGAR_FLAT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.paylpad,
      };
    case OBTENER_FLAT_EXITO:
      return {
        ...state,
        loading: false,
        flats: action.payload,
      };
    case ORDENAR_ALFA:
      console.log(state.flats);
      return {
        ...state,
        flats: [...state.flats.sort((a, b) => a.name.localeCompare(b.name))],
      };
    case ORDENAR_PRICE:
      return {
        ...state,
        flats: [...state.flats.sort((c, d) => c.price - d.price)],
      };
    default:
      return state;
  }
}
