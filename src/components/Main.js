import Api from "../service/Api";
import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const Main = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    Api().then((data) => setCharacter(data));
  }, []);

  return <CharacterList charactersList={character} />;
};
export default Main;
