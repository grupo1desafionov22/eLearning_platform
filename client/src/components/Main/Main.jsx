import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Courses from "./Courses/Courses";
import Admincourses from "./Admin/Admincourses/Admincourses";
import Creation from './Admin/Creation';
import Edition from './Admin/Edition';
import DetailsCourse from "./DetailsCourse/DetailsCourse";
import Comunidad from "./Comunidad/Comunidad";


const Main = () => {
  return <main className="mainFormat">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route  path="/courses/:course_id" element={<DetailsCourse />}  />
        <Route  path="/comunidad" element={<Comunidad/>}  />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/admin/courses" element={<Admincourses />} />
        <Route path="/admin/edition/:course_id" element={<Edition />} />
      </Routes>
  </main>;
};

export default Main;