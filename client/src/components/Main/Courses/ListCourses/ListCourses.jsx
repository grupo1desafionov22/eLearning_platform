import React from "react";
import { v4 as uuidv4 } from 'uuid';
import CardCourse from "./CardCourse/CardCourse";

const ListCourses = (props) => {
  return <section>
  <h1>Cursos</h1>
{props.data.map(course => <CardCourse data={course} key={uuidv4()}/>)}
  </section>;
};

export default ListCourses;