import React from "react";
import "../stylesheets/CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="card">
      <img
        className="card__img"
        id={props.element.id}
        src={props.element.img}
        alt={props.element.name}
      />
      <h4 className="card__tittle">{props.element.name}</h4>
      <p className="card__description">{props.element.species}</p>
      <Link
        className="card__link"
        to={`/Main/CharacterDetail/${props.element.id}`}
      >
        + Info
      </Link>
    </div>
  );
};
export default CharacterCard;
