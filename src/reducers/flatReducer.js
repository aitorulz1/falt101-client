import { AGREGAR_FLAT, AGREGAR_FLAT_EXITO, AGREGAR_FLAT_ERROR } from "../types";

const initialState = {
  flats: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
