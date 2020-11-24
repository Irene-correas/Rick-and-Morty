import Api from "../service/Api";
import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";

const Main = () => {
  const [character, setCharacter] = useState([]);
  const [filterName, setFilterName] = useState("");

  // API
  useEffect(() => {
    Api().then((data) => setCharacter(data));
  }, []);

  // Funcion
  const handleChange = (filterName) => {
    setFilterName(filterName);
    console.log("holi");
  };

  // filtrar por nombre
  console.log(filterName);
  const filteredCharacter = character.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });
  console.log(filteredCharacter);

  return (
    <>
      <Header />
      <Filter handleChange={handleChange} />
      <CharacterList charactersList={filteredCharacter} />
    </>
  );
};
export default Main;
