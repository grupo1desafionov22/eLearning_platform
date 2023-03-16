import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Courses from "./Courses/Courses";
import Creation from './Admin/Creation';


const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/details" element={<Details />} />
        <Route path="/courses" element={<Courses />} />

      </Routes>
  </main>;
};

export default Main;