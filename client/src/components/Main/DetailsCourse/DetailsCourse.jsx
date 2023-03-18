import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DetailCourseCard from "./DetailCourseCard/DetailCourseCard";
import axios from "axios";

const DetailsCourse = () => {
  const { course_id } = useParams();

  const [course, setCourse] = useState({});
  
  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${course_id}`)
      .then(response => setCourse(response.data))
      .catch(error => console.error(error));
  }, []);
  
  console.log('datos info',course); 

  return (
    <section style={{ backgroundColor: "blue"}}>
      <h1> Detalles </h1>
      {course && <DetailCourseCard data={course} key={uuidv4()} />}
    </section>
  );
};

export default DetailsCourse;

