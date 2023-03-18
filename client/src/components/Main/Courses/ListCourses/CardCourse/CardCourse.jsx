import React from "react";
import { TfiHeart} from "react-icons/tfi";
import { Link } from "react-router-dom";

const CardCourse = (props) => {
  

  return (
    <>
     
       
        <h3>{props.data.course_title.toUpperCase()}</h3>
        <p>{props.data.course_description}</p>
        <button ><TfiHeart /></button>
        <Link to={'/courses/'+props.data.course_id}>Entrar al curso</Link>

      
    </>
  );
};

export default CardCourse;


