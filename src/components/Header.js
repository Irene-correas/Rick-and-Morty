import React from "react";
import "../stylesheets/Header.css";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="background__header">
        <h1>
          <Link className="header" to="/">
            Rick and Morty
          </Link>
        </h1>
      </div>
    );
  }
}

export default Landing;
