import Api from "../service/Api";
import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";

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
  };

  // filtrar por nombre
  const filteredCharacter = character.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });

  // Pintar character detail
  const renderDetail = (props) => {
    const CharacterId = parseInt(props.match.params.id);
    const foundCharacter = character.find((character) => {
      return CharacterId === character.id;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail info={foundCharacter} />;
    } else {
      return false;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/Main">
          <Header />
          <Filter handleChange={handleChange} />
          <CharacterList
            charactersList={filteredCharacter}
            handleChange={handleChange}
          />
        </Route>
        <Route path="/Main/CharacterDetail/:id" component={renderDetail} />
      </Switch>
    </>
  );
};
export default Main;
