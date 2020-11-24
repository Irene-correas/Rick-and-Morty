import React from "react";
import { Link } from "react-router-dom";

class CharacterDetail extends React.Component {
  render() {
    return (
      <div className="">
        <Link className="link" to="/Main">
          Volver
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
