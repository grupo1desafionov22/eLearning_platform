import React from "react";
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';



const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </main>;
};

export default Main;
