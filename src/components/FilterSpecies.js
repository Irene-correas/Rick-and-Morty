import React from "react";

const FilterSpecies = (props) => {
  const handleFilterSpecies = (event) => {
    props.handleFilterSpecies(event.target.value);
  };
  return (
    <form className="species__form">
      <label className="species__label"></label>
      <select
        className="species__input"
        value={props.charactersList.species}
        onChange={handleFilterSpecies}
      >
        <option className="species__input" type="text" value="all">
          Todos
        </option>
        <option type="text" value="Alien">
          Alien
        </option>
        <option className="species__input" type="text" value="Human">
          Humano
        </option>
      </select>
    </form>
  );
};
export default FilterSpecies;
