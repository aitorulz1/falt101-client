import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerFlats } from "../../actions/flatActions";
import Flat from "./Flat";

export default function Flats() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarFlats = () => dispatch(obtenerFlats());
    cargarFlats();
  }, []);

  const flats = useSelector((state) => state.flats.flats);

  const { id } = flats;

  return (
    <>
      {flats.length === 0 ? (
        <p>No hay Flats</p>
      ) : (
        flats.map((flat) => <Flat key={id} flat={flat} />)
      )}
    </>
  );
}
