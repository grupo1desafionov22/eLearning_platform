import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import axios from 'axios';

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
    course_title: "",
    course_description: "",
    course_url: "",
    format: "",
    length: "",
    length_unit: "",
    creator: "",
    image_url: "",
    lessons: []
  });

  const [numLessons, setNumLessons] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("lesson_")) {
      // Extract the lesson number from the input field name
      const lessonNum = parseInt(name.split("_")[1]);
      // Create a new copy of the lessons array with the new value at the correct index
      const newLessons = [...course.lessons];
      newLessons[lessonNum - 1] = value;
      // Update the course state with the new lessons array
      setCourse({ ...course, lessons: newLessons });
    } else {
      setCourse({ ...course, [name]: value });
    }
  };

  const handleAddLesson = () => {
    setNumLessons(numLessons + 1);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Check if the selected file is a PDF or a video
    if (selectedFile.type === 'application/pdf' || selectedFile.type === 'video/mp4') {
      setCourse({ ...course, course_url: selectedFile });
    } else {
      alert('Please upload a PDF or a video file.');
    }
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`files/${course.course_url.name}`);
    fileRef.put(course.course_url)
      .then((snapshot) => {
        console.log("File uploaded successfully");
        // Get the URL of the uploaded file from Firebase Storage
        fileRef.getDownloadURL()
          .then(url => {
            // Update the course object with the file URL
            const updatedCourse = { ...course, course_url: url };
            // Send the course data to the database
            const requestOptions = {
              headers: { 'Content-Type': 'application/json' },
            };
            const { course_id, ...newCourse } = updatedCourse;
            axios.post('http://localhost:5000/courses/create', newCourse, requestOptions)
              .then(response => console.log(response))
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  // Generate an array of JSX elements for the lesson input fields
  const lessonInputs = [];
  for (let i = 1; i <= numLessons; i++) {
    lessonInputs.push(
      <div key={i}>
        <label>Lesson {i}:</label>
        <input type="text" name={`lesson_${i}`} value={course.lessons[i - 1] || ""} onChange={handleInputChange} />
      </div>
    );
  }

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="course_title" value={course.course_title} onChange={handleInputChange} />
      <label>Description:</label>
      <input type="text" name="course_description" value={course.course_description} onChange={handleInputChange} />
      <label>Format:</label>
      <input type="text" name="format" value={course.format} onChange={handleInputChange} />
      <label>Length:</label>
      <input type="number" name="length" value={course.length} onChange={handleInputChange} />
      <label>Creator:</label>
      <input type="text" name="creator" value={course.creator} onChange={handleInputChange} />
      <label>Image URL:</label>
      <input type="text" name="image_url" value={course.image_url} onChange={handleInputChange} />
      {lessonInputs}
      <button onClick={handleAddLesson}>Add Lesson</button>
      <label>PDF:</label>
      <input type="file" name="course_url" onChange={handleFileChange} />
      <button onClick={handleUpload}>Create Course</button>
    </div>
  );
};

export default Creation;
