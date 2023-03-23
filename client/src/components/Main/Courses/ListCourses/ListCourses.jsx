import { React, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CardCourse from "./CardCourse/CardCourse";
import './ListCourses.css'


const ListCourses = (props) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <section className="list">
      <input className="button-Input" type="search" name="search" onChange={onChange} placeholder="Buscar curso " style={{ width: "350px" }}/>
      <h1>Nuestros cursos</h1>
      <p>Infórmate con nuestros cursos sobre todo lo relacionado con el VIH y las infecciones de transmisión sexual</p>

      {search
        ? props.data.filter((course) => course.course_title && course.course_title.toLowerCase().includes(search.toLowerCase()))
            .map((course) => <CardCourse data={course} key={uuidv4()} />)
        : props.data.map((course) => <CardCourse data={course} key={uuidv4()} />)
      }
    </section>
  );
};
export default ListCourses;

