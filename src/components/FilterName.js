import React from "react";

const FilterName = (props) => {
  const handleChange = (event) => {
    console.log(event.type, event.target.value);
    props.handleFilter(event.target.value);
  };
  return (
    <div>
      <label className="form__label display block" htmlFor="name">
        Nombre:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterName;
