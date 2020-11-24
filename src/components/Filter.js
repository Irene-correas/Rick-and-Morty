import React from "react";
import FilterName from "./FilterName";

const Filter = (props) => {
  const handleSubmit = (ev) => {
    ev.currentTarget.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterName handleFilter={props.handleChange} />
      </form>
    </section>
  );
};
export default Filter;
