import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <div>
            <button onClick={handlePdfButtonClick}>View content</button>
            {showPdf && (
              <div>
                <button onClick={handleFullscreenButtonClick}>
                  {isFullScreen ? "Exit Fullscreen" : "⛶"}
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
      </article>
    </section>
);
};

export default DetailsCourse;