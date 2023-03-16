import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);

const Creation = () => {
  const [course, setCourse] = useState({
    course_id: "",
    course_title: "",
    course_description: "",
    course_url: "",
    format: "",
    length: "",
    length_unit: "",
    creator: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({...course, [name]: value});
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setCourse({...course, course_url: selectedFile});
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const pdfRef = storageRef.child(`pdfs/${course.course_url.name}`);
    pdfRef.put(course.course_url)
      .then((snapshot) => {
        console.log("PDF uploaded successfully");
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(course)
        };
        fetch('http://localhost:5000/courses/create', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      })
      .catch((error) => {
        console.error("Error uploading PDF: ", error);
      });
  };
  

  return (
    <div>
      <label>Course ID:</label>
      <input type="text" name="course_id" value={course.course_id} onChange={handleInputChange} /><br />
      <label>Title:</label>
      <input type="text" name="course_title" value={course.course_title} onChange={handleInputChange} /><br />
      <label>Description:</label>
      <input type="text" name="course_description" value={course.course_description} onChange={handleInputChange} /><br />
      <label>Format:</label>
      <input type="text" name="format" value={course.format} onChange={handleInputChange} /><br />
      <label>Length:</label>
      <input type="number" name="length" value={course.length} onChange={handleInputChange} /><br />
      <label>Length Unit:</label>
      <input type="text" name="length_unit" value={course.length_unit} onChange={handleInputChange} /><br />
      <label>Creator:</label>
            <input type="text" name="creator" value={course.creator} onChange={handleInputChange} /><br />
      <label>PDF:</label>
      <input type="file" name="course_url" onChange={handleFileChange} /><br />
      <button onClick={handleUpload}>Create Course</button>
    </div>
  );
};

export default Creation;