import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminlistcourses from './Adminlistcourses/Adminlistcourses';

const Admincourses = () => {
  const [courses, setCourses] = useState([]);

  const handleDelete = (courseId) => {
    axios
      .delete(`http://localhost:5000/courses/delete-one`, { data: { course_id: courseId } })
      .then(() => {
        const updatedCourses = courses.filter((course) => course.course_id !== courseId);
        setCourses(updatedCourses);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/courses/all')
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  }, [setCourses]);

  return (
    <section>
      <Adminlistcourses data={courses} handleDelete={handleDelete} />
    </section>
  );
};

export default Admincourses;