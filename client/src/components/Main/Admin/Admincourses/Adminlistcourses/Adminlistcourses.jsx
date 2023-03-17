import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Admincardcourse from "./Admincardcourse/Admincardcourse";

const Adminlistcourses = (props) => {
  return <section>
  <h1>Cursos</h1>
{props.data.map(course => <Admincardcourse data={course} key={uuidv4()}/>)}
  </section>;
};

export default Adminlistcourses;