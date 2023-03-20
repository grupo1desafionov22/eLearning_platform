import React from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Link to="/admin/creation">
        <button>Crear curso</button>
      </Link>
    </div>
  );
};
export default Admin;