import React from "react";
import FilterName from "./FilterName";
import "../stylesheets/Filter.css";
import FilterSpecies from "./FilterSpecies";
const Filter = (props) => {
  const handleSubmit = (ev) => {
    ev.currentTarget.preventDefault();
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterName handleFilter={props.handleChange} />
        <FilterSpecies
          handleFilterSpecies={props.handleChangeSpecies}
          charactersList={props.charactersList}
        />
      </form>
    </section>
  );
};
export default Filter;
