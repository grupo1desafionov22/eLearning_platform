import { React, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CardCourse from "./CardCourse/CardCourse";

const ListCourses = (props) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <section>
      <input type="search" name="search" onChange={onChange} placeholder="Search" />
      <h1>Cursos</h1>
      {search
        ? props.data.filter((course) => course.course_title && course.course_title.toLowerCase().includes(search.toLowerCase()))
            .map((course) => <CardCourse data={course} key={uuidv4()} />)
        : props.data.map((course) => <CardCourse data={course} key={uuidv4()} />)
      }
    </section>
  );
};
export default ListCourses;

/* 
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import CardCourse from "./CardCourse/CardCourse";

const ListCourses = (props) => {
  return <section>
  <h1>Cursos</h1>
{props.data.map(course => <CardCourse data={course} key={uuidv4()}/>)}
  </section>;
};

export default ListCourses; */