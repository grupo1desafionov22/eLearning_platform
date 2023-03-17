import React from "react";
import Admincardcourse from "./Admincardcourse/Admincardcourse";

const Adminlistcourses = (props) => {
  return (
    <section>
      <h1>Cursos</h1>
      {props.data.map(course => <Admincardcourse data={course} key={course.course_id} />)}
    </section>
  );
};

export default Adminlistcourses;