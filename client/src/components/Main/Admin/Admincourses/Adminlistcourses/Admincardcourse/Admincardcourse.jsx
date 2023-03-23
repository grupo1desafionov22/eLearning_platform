import React from "react";
import { useNavigate } from 'react-router-dom';


const Admincardcourse = (props) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    props.handleDelete(props.data.course_id);
  };

  const handleEdit = () => {
    navigate(`/admin/edition/${props.data.course_id}`);
  }; 


  return (
   
    <article  className="list-card">
       <div className="info-course">
      <h3>{props.data.course_title.toUpperCase()}</h3>
      <p>{props.data.course_description}</p>
      <button onClick={handleEdit} className="button-Input">Editar</button>
      <button onClick={handleDelete} className="button-Input">Eliminar</button>
      </div>
      <div>
        <img className="img-card" src={props.data.image_url} alt={props.data.course_title} style={{ width: "250px", height: "180px" }}/>
        </div>
       
    </article>
  
  );
};

export default Admincardcourse;