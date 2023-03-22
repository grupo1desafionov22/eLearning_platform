import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListCourses from './ListCourses/ListCourses';
import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:5000/courses/all')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, [setCourses]);

  return (
    <section >
      <ListCourses
        data={courses}
      />
    </section>
  );
};

export default Courses;