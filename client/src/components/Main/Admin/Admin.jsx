import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Link to="/admin/creation">
        <button>Crear curso</button>
      </Link>
      <iframe src="https://nicolaseyzaguirre-vih-gtt-app-rozt40.streamlit.app/?someparam=value&embedded=true" title="Streamlit app" width="100%" height="500"></iframe>
    </div>
  );
};

export default Admin;
