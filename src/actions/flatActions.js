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

import clienteAxios from "../service/axios";

// ----------- Crear nuevo Flat -----------

export function crearNuevoFlat(newflat) {
  return (dispatch) => {
    dispatch(agregarFlat());

    try {
      clienteAxios.post("/flats", newflat);
      dispatch(agregarFlatExito(newflat));
    } catch (error) {
      dispatch(agregarFlatError(true));
    }
  };
}

const agregarFlat = () => ({
  type: AGREGAR_FLAT,
  payload: true,
});

const agregarFlatExito = (newflat) => ({
  type: AGREGAR_FLAT_EXITO,
  payload: newflat,
});

const agregarFlatError = (estado) => ({
  type: AGREGAR_FLAT_ERROR,
  payload: estado,
});

// ----------- Obtener Flats -----------

export function obtenerFlats(flats) {
  return async (dispatch) => {
    dispatch(cargarFlats());

    try {
      const respuesta = await clienteAxios.get("/flats");
      dispatch(obtenerFlatsExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerFlatsError(true));
    }
  };
}

const cargarFlats = () => ({
  type: COMENZAR_DESCARGA_FLAT,
  payload: true,
});

const obtenerFlatsExito = (flats) => ({
  type: OBTENER_FLAT_EXITO,
  payload: flats,
});

const obtenerFlatsError = () => ({
  type: OBTENER_FLAT_ERROR,
  payload: true,
});

// ----------- Ordenar Flats Alfa -----------

export function ordenarFlatsAlfa() {
  return (dispatch) => {
    dispatch({
      type: ORDENAR_ALFA,
    });
  };
}

// const ordenarFlatsByAlfa = () => ({
//   type: ORDENAR_ALFA,
// });

// ----------- Ordenar Flats Price -----------

export function ordenarFlatsPrice() {
  return (dispatch) => {
    dispatch(ordenarFlatsByPrice());
  };
}

const ordenarFlatsByPrice = () => ({
  type: ORDENAR_PRICE,
});
