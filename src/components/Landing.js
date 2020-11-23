import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="background">
        <h1 className="tittle">Bienvenidos</h1>
        <Link className="link" to="/Main">
          Comenzar
        </Link>
      </div>
    );
  }
}

export default Landing;
