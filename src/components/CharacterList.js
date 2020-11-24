import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.css";
// import Filter from "./Filter";
// import FilterName from "./FilterName";

const CharacterList = (props) => {
  // const handlerChange = (event) => {
  //   props.handlerChange(event.target.value);
  // };
  // console.log(handlerChange);
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
        ;
      </ul>
    </div>
  );
};

export default CharacterList;
