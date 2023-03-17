import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return <nav className={"nav-bar"}>
  <Link to="/admin/courses">Cursos</Link>
  <Link to="">Comunidad</Link>
  <Link to="">Explora</Link> 
</nav>;
};

export default AdminNav;
