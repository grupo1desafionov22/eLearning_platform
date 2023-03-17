import React from "react";
import { Link } from "react-router-dom";

const Nav2 = () => {
  return <nav className={"nav-bar"}>
  <Link to="/courses">Cursos</Link>
  <Link to="">Comunidad</Link>
  <Link to="">Explora</Link> 
</nav>;
};

export default Nav2;
