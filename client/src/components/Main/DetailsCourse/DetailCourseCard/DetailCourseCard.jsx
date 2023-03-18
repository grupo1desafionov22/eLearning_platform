import React from "react";

const DetailCourseCard = ({ data }) => {
  console.log('prueba')
  console.log(data); 
  return (
    <article className="course-card">
      <h1>{data.course_title}</h1>
      <p>Description: {data.course_description}</p>
      <p>Formato: {data.format}</p>
      <p>Tamaño: {data.length}</p>
      <button>Ver pdf</button>
    </article>
  );
};

export default DetailCourseCard;

