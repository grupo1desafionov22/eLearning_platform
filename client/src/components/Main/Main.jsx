import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Courses from "./Courses/Courses";
import Admincourses from "./Admin/Admincourses/Admincourses";
import Creation from './Admin/Creation';
<<<<<<< HEAD
import Edition from './Admin/Edition';
=======
import DetailsCourse from "./DetailsCourse/DetailsCourse";

>>>>>>> c4fadedc8cdb2f71c1f032273e07e4b082105f09

const Main = () => {
  return <main className="mainFormat">
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route  path="/courses/:course_id" element={<DetailsCourse />}  />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/admin/courses" element={<Admincourses />} />
        <Route path="/admin/edition/:course_id" element={<Edition />} />
      </Routes>
  </main>;
};

export default Main;