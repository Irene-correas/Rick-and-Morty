import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    <ul>
      {props.charactersList.map((character) => {
        return (
          <li className="card" key={character.id}>
            <CharacterCard element={character} />
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default CharacterList;
