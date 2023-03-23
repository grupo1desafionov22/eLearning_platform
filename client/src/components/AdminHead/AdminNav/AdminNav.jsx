import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return <nav className={"admin-nav-bar"}>
  <Link to="/admin/courses" className="buttonCard">Cursos</Link>
  <Link to="" className="buttonCard">Comunidad </Link>
  <Link to="" className="buttonCard">Explora </Link> 
</nav>;
};

export default AdminNav;
