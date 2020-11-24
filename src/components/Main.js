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

  const renderDetail = (props) => {
    const CharacterId = parseInt(props.match.params.id);
    const foundCharacter = character.find((character) => {
      return CharacterId === character.id;
    });
    if (foundCharacter !== undefined) {
      console.log("difernte");
      return (
        <CharacterDetail
          info={foundCharacter}
          // name={foundCharacter.name}
          // status={foundCharacter.status}
          // species={foundCharacter.species}
          // gender={foundCharacter.gender}
          // origin={foundCharacter.origin}
          // location={foundCharacter.location}
          // img={foundCharacter.image}
        />
      );
    } else {
      return false;
    }
  };

  return (
    <>
      <Header />
      <Filter handleChange={handleChange} />
      <Switch>
        <Route exact path="/Main">
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
