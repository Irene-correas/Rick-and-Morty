import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.css";

const CharacterDetail = (props) => {
  console.log(props.info);

  return (
    <div>
      <h2 className="card__tittle">{props.info.name}</h2>
      <ul>
        <li className="card__status">{props.info.status}</li>
        <li className="card__species">{props.info.species}</li>
        <li className="card__origin">{props.info.origin.name}</li>
        <li className="card__location">{props.info.location.name}</li>
        <img className="card__img" src={props.info.img} alt={props.name} />
      </ul>
      <Link className="card__link" to="/Main">
        Volver
      </Link>
    </div>
  );
};

export default CharacterDetail;
