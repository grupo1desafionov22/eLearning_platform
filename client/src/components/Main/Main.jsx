import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Creation from './Admin/Creation';

const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  </main>;
};

export default Main;
