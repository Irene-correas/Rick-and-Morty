import React from "react";
import "../stylesheets/FilterName.css";

const FilterName = (props) => {
  const handleChange = (event) => {
    console.log(event.type, event.target.value);
    props.handleFilter(event.target.value);
  };
  return (
    <div>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterName;
