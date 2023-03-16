import React from "react";
import { Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import { useSelector } from 'react-redux'
const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}


const Main = () => {
  return <main>
    Main
    <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<Admin />} />
        
        <Route path="/details" element={<Details />} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  </main>;
};

export default Main;
