import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { escape } from "lodash";

const Edition = () => {
  const { course_id } = useParams();
  console.log(course_id);
  const [formData, setFormData] = useState({
    course_title: "",
    course_description: "",
    format: "",
    length: "",
    creator: "",
    image_url: "",
    lessons: []
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${course_id}`)
      .then(response => {
        console.log(response.data);
        setFormData(response.data);
      })
      .catch(error => console.error(error));
  }, [course_id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: escape(value) });
  };
  
  const handleLessonChange = (index, event) => {
    const newLessons = [...formData.lessons];
    newLessons[index] = escape(event.target.value);
    setFormData({ ...formData, lessons: newLessons });
  }

  const handleAddLesson = () => {
    setFormData({ ...formData, lessons: [...formData.lessons, ""] });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/courses/update-one/${course_id}`, formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <section>
      <h1> Detalles </h1>
      <form onSubmit={handleSubmit} className="editionFormat">
        <label htmlFor="course_title">Título:</label>
        <input type="text" name="course_title" className="button-Input" value={formData.course_title} onChange={handleInputChange} />
        <label htmlFor="course_description">Descripción:</label>
        <input type="text" name="course_description" className="button-Input" value={formData.course_description} onChange={handleInputChange} />
        <label htmlFor="format">Formato:</label>
        <input type="text" name="format" className="button-Input" value={formData.format} onChange={handleInputChange} />
        <label htmlFor="length">Tamaño:</label>
        <input type="text" name="length" className="button-Input" value={formData.length} onChange={handleInputChange} />
        <label htmlFor="creator">Creador:</label>
        <input type="text" name="creator" className="button-Input" value={formData.creator} onChange={handleInputChange} />
        <label htmlFor="image_url">URL de la imagen:</label>
        <input type="text" name="image_url" className="button-Input" value={formData.image_url} onChange={handleInputChange} />
        <label htmlFor="lessons">Lecciones:</label>
        {formData.lessons.map((lesson, index) => (
          <input key={index} type="text" className="button-Input" value={lesson} onChange={(e) => handleLessonChange(index, e)} />
        ))}
        <button type="button" className="button-Input" onClick={handleAddLesson}>Agregar lección</button>
        <button type="submit" className="button-Input">Actualizar</button>
      </form>
    </section>
  );
};

export default Edition;


