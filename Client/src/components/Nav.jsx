import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "../hojas-de-estilo/Nav.css";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div className="button-nav">
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </button>
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </button>
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;
