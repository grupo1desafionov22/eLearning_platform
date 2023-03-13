import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const Details = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const storageRef = firebase.storage().ref();
    const pdfsRef = storageRef.child("pdfs");

    pdfsRef.listAll().then((res) => {
      const promises = res.items.map((item) => item.getDownloadURL());

      Promise.all(promises).then((urls) => {
        setPdfs(urls);
      });
    });
  }, []);

  return (
    <div>
      {pdfs.map((url, index) => (
        <div key={index}>
          <iframe src={url} title={`PDF Document ${index + 1}`} width="100%" height="500px"></iframe>
        </div>
      ))}
    </div>
  );
};

export default Details;

