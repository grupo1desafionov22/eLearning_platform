import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';

const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  </main>;
};

export default Main;
