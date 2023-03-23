
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExploreList from './ExploreList/ExploreList'

const Explore = () => {

  const [courses, setCourses] = useState([]);
  const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  const url = 'http://seenstevo.pythonanywhere.com/recom?user_id=2&course_id=4';
  
  fetch(proxyUrl + url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });



  return (
    <section >
      <ExploreList
        data={courses}
      />
    </section>
  );
};



 

export default Explore;