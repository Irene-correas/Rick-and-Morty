import React from "react";
import "../stylesheets/CharacterCard.css";

const CharacterCard = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.element.img} />
      <h4 className="card__tittle">{props.element.name}</h4>
      <p className="card_description">{props.element.species}</p>
    </div>
  );
};
export default CharacterCard;
