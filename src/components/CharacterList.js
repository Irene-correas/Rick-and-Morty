import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.css";

const CharacterList = (props) => {
  return (
    <div>
      <ul className="list__container">
        {props.charactersList.map((character, index) => {
          return (
            <li className="list__card" key={index}>
              <CharacterCard element={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
