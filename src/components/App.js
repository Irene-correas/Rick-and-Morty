import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </>
  );
};
export default App;
