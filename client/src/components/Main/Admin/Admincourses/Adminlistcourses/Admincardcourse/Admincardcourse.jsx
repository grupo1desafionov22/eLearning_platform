import React from "react";

const Admincardcourse = (props) => {
  

  return (
    <>
     
       
        <h3>{props.data.course_title.toUpperCase()}</h3>
        <p>{props.data.course_description}</p>

        <button >Entrar al curso</button>
        <img src={props.data.course_url} alt={props.data.title} />

      
    </>
  );
};

export default Admincardcourse;