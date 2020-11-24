import Api from "../service/Api";
import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

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

  const renderDetail = (props) => {};

  return (
    <>
      <Header />
      <Filter handleChange={handleChange} />
      <Switch>
        <Route
          exact
          path="/Main"
          CharactersList={filteredCharacter}
          handleChange={handleChange}
        />
      </Switch>
      <CharacterList
        charactersList={filteredCharacter}
        component={renderDetail}
      />
      <CharacterDetail />
    </>
  );
};
export default Main;
