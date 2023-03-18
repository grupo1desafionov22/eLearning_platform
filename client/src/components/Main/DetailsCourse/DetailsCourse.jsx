import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsCourse = () => {
  const { course_id } = useParams();

  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/${course_id}`)
      .then((response) => setCourse(response.data))
      .catch((error) => setError(error));
  }, [course_id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePdfButtonClick = () => {
    setShowPdf(true);
  };

  return (
    <section style={{ backgroundColor: "blue" }}>
      <h1> Detalles </h1>
      <article className="course-card">
        <h1>{course.course_title}</h1>
        <p>Description: {course.course_description}</p>
        <p>Formato: {course.format}</p>
        <p>Tamaño: {course.length}</p>
        <img src={course.image_url} alt="" />
        <ol>
          {course.lessons &&
            course.lessons.map((lesson, index) => <li key={index}>{lesson}</li>)}
        </ol>
        {course.course_url && (
          <button onClick={handlePdfButtonClick}>View PDF</button>
        )}
        {showPdf && (
          <iframe
            src={course.course_url}
            title="PDF Viewer"
            width="100%"
            height="500"
          />
        )}
      </article>
    </section>
  );
};

export default DetailsCourse;
