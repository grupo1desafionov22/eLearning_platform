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
    <>
      <h3>{props.data.course_title.toUpperCase()}</h3>
      <p>{props.data.course_description}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Admincardcourse;