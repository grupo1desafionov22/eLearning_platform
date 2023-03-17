import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminlistcourses from './Adminlistcourses/Adminlistcourses';

const Admincourses = () => {
  const [courses, setCourses] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:5000/courses/all')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, [setCourses]);

  return (
    <section>
      <Adminlistcourses
        data={courses}
      />
    </section>
  );
};

export default Admincourses;