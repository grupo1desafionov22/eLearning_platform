import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edition = () => {
  const { course_id } = useParams();
  console.log(course_id);
  const [formData, setFormData] = useState({
    course_title: "",
    course_description: "",
    format: "",
    length: "",
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/courses/update-one/${course_id}`, formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <section style={{ backgroundColor: "blue"}}>
      <h1> Detalles </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="course_title">Título:</label>
        <input type="text" name="course_title" value={formData.course_title} onChange={handleInputChange} />
        <label htmlFor="course_description">Descripción:</label>
        <input type="text" name="course_description" value={formData.course_description} onChange={handleInputChange} />
        <label htmlFor="format">Formato:</label>
        <input type="text" name="format" value={formData.format} onChange={handleInputChange} />
        <label htmlFor="length">Tamaño:</label>
        <input type="text" name="length" value={formData.length} onChange={handleInputChange} />
        <button type="submit">Actualizar</button>
      </form>
    </section>
  );
};

export default Edition;
