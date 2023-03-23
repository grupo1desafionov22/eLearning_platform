import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailsCourse.css'
import { Link } from "react-router-dom";


const DetailsCourse = () => {
  const { course_id } = useParams();

  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const pdfViewerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/${course_id}`)
      .then((response) => setCourse(response.data))
      .catch((error) => setError(error));
  }, [course_id]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(document.fullscreenElement != null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePdfButtonClick = () => {
    setShowPdf(true);
  };

  const handleFullscreenButtonClick = () => {
    if (!isFullScreen) {
      if (pdfViewerRef.current.requestFullscreen) {
        pdfViewerRef.current.requestFullscreen();
      } else if (pdfViewerRef.current.webkitRequestFullscreen) { /* Safari */
        pdfViewerRef.current.webkitRequestFullscreen();
      } else if (pdfViewerRef.current.msRequestFullscreen) { /* IE11 */
        pdfViewerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section >
      
      <article className="course-detail">
        <h1>Detalles del curso: {course.course_title}</h1>
        <p>Description: {course.course_description}</p>
        <p>Formato: {course.format}</p>
        <p>Tamaño: {course.length}</p>
        <img className="img-detail" src={course.image_url} alt={course.course_title} style={{width: '250px', height: '180px'}}/>
        

        </article>
        <ol>

          {course.lessons &&
            course.lessons.map((lesson, index) => <li key={index}>{lesson}</li>)}
        </ol>
       {course.course_url && (
  <div>
    {!showPdf && (
      <button onClick={handlePdfButtonClick} className="button-Input">Ver contenido</button>
    )}
    <Link to="/courses"><button className="button-Input">Regresar a Cursos</button></Link>
    
    {showPdf && (
      <div>
        <button onClick={handleFullscreenButtonClick} className="button-Input">
          {isFullScreen ? "Exit Fullscreen" : "Maximizar contenido"}
        </button>
        <iframe
          src={course.course_url}
          title="PDF Viewer"
          width="100%"
          height="500"
          ref={pdfViewerRef}
        />
      </div>
    )}
  </div>
)}
      
    </section>
);
};

export default DetailsCourse;