import React from "react";
import FilterName from "./FilterName";
import "../stylesheets/Filter.css";

const Filter = (props) => {
  const handleSubmit = (ev) => {
    ev.currentTarget.preventDefault();
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterName handleFilter={props.handleChange} />
      </form>
    </section>
  );
};
export default Filter;
