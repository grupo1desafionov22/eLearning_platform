
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExploreList from './ExploreList/ExploreList'

const Explore = () => {

  const [courses, setCourses] = useState([]);

  const getRecomended = () => {
    axios.get(' http://seenstevo.pythonanywhere.com/recom?user_id=2&course_id=4')
    .then(res => console.log(res))
  }

  useEffect(() => {
    axios.get('http://localhost:5000/courses/all')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, [setCourses]);

  getRecomended()

  return (
    <section >
      <ExploreList
        data={courses}
      />
    </section>
  );
};



 

export default Explore;