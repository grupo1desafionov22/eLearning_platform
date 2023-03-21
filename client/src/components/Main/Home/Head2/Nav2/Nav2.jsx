import React from "react";
import { Link } from "react-router-dom";
import './Nav2.css'

const Nav2 = () => {
  return <nav className={"nav-bar"}>
  <Link to="/courses" className="buttonCard"><p className="filter">Cursos</p></Link>
  <Link to="/comunidad" className="buttonCard"><p className="filter">Comunidad</p></Link>
  <Link to="/explora" className="buttonCard"><p className="filter">Explora</p></Link> 
</nav>;
};

export default Nav2;
