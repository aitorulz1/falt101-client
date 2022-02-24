import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerFlats } from "../../actions/flatActions";
import Flat from "./Flat";
import Nav from "../Layout/Header/Nav";
import Bath from "../../assets/bath.jpg";
import Panels from "../Panels/Panels";
import Pagination from "../Layout/Footer/Paginations";

import "./css/ObtenerFlats.css";

export default function Flats() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarFlats = () => dispatch(obtenerFlats());
    cargarFlats();
  }, []);

  const flats = useSelector((state) => state.flats.flats);

  const totalPages = flats.length / 4;

  const { id } = flats;

  return (
    <Fragment>
      <Nav />
      <Panels />
      <div className="obtener-container">
        <div className="obtener-content">
          <ul className="flat-container">
            {flats.length === 0 ? (
              <div className="empty-container">
                <p>No hay Flats</p>
                <img src={Bath} />
              </div>
            ) : (
              flats.map((flat) => <Flat key={id} flat={flat} />)
            )}
          </ul>
          {flats.length !== 0 ? <Pagination /> : null}
        </div>
      </div>
    </Fragment>
  );
}
