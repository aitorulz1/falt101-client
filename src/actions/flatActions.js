import { AGREGAR_FLAT, AGREGAR_FLAT_EXITO, AGREGAR_FLAT_ERROR } from "../types";

// Crear nuevo Flat
export function crearNuevoFlat(producto) {
  return () => {
    console.log(producto);
  };
}
