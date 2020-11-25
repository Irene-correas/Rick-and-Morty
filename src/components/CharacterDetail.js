import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.css";

const CharacterDetail = (props) => {
  return (
    <div className="background__detail">
      <div className="preview__container">
        <h2 className="preview__tittle">{props.info.name}</h2>
        <ul>
          <li className="preview__status">Estado: {props.info.status}</li>
          <li className="preview__species">Especie: {props.info.species}</li>
          <li className="preview__origin">Origen: {props.info.origin.name}</li>
          <li className="preview__location">
            Episodios: {props.info.episode.length}
          </li>
          <img className="preview__img" src={props.info.img} alt={props.name} />
        </ul>
        <Link className="preview__link" to="/Main">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetail;
