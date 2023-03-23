import React from "react";
import { Link } from "react-router-dom";
import './Admin.css'

const Admin = () => {
  return (
    
    <section>
      <Link to="/admin/creation"><button className="button-Input">Crear curso</button></Link>
      <iframe className="data-iframe" src="https://nicolaseyzaguirre-vih-gtt-app-rozt40.streamlit.app/?someparam=value&embedded=true" title="Streamlit app" ></iframe>
      
    </section>
  );
};

export default Admin;
