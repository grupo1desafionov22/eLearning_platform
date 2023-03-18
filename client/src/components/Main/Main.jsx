import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Courses from "./Courses/Courses";
import Creation from './Admin/Creation';
import DetailsCourse from "./DetailsCourse/DetailsCourse";


const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/details" element={<Details />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route  path="/courses/:course_id" element={<DetailsCourse />}  />

      </Routes>
  </main>;
};

export default Main;