import React from "react";
import { TfiHeart} from "react-icons/tfi";

const CardCourse = (props) => {
  

  return (
    <>
     
       
        <h3>{props.data.course_title.toUpperCase()}</h3>
        <p>{props.data.course_description}</p>

        <button >Entrar al curso</button>
        <button ><TfiHeart /></button>
        <img src={props.data.course_url} alt={props.data.title} />

      
    </>
  );
};

export default CardCourse;