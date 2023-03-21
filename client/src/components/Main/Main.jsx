import React, {useState,useEffect} from "react";
import { Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import { useSelector } from 'react-redux';
import Courses from "./Courses/Courses";
import Admincourses from "./Admin/Admincourses/Admincourses";
import Creation from './Admin/Creation';
import Edition from './Admin/Edition';
import DetailsCourse from "./DetailsCourse/DetailsCourse";
import Comunidad from "./Comunidad/Comunidad";

const PrivateRoutes = () => {

  const { isAuth } = useSelector((state) => state.auth)


  return <>{isAuth ? <Outlet /> : <Navigate to='/home' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}


const Main = () => {
  const { isAuth } = useSelector((state) => state.auth)
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return <main className="mainFormat">

    <Routes>

  
      {/*   <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        </Route>
    */}
        <Route
          path="/"
          element={user?.email || isAuth ? <Navigate to="/courses" /> : <Login />}
        />
        <Route
          path="/register"
          element={user?.email || isAuth  ? <Navigate to="/courses" /> : <Register/>}
        />
        <Route
          path="/login"
          element={user?.email || isAuth  ? <Navigate to="/courses" /> : <Login />}
        />
        <Route
          path="/home"
          element={user?.email || isAuth  ? <Home user={user} /> : <Navigate to="/" />}
        />

        <Route
          path="/courses/:course_id"
          element={user?.email || isAuth ? <DetailsCourse  user={user} /> : <Navigate to="/" />}
        />

        <Route path="*" element={<NotFound />} />



      {/*   <Route path="/" element={<Home />} /> */}
        <Route path="/courses/*" element={<Courses />} />
        <Route  path="/comunidad" element={<Comunidad/>}  />

        {/*  <Route element={<PrivateRoutes />}>
        <Route  path="/courses/:course_id" element={<DetailsCourse />}  />
        
        </Route> */}

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/creation" element={<Creation />} />
        <Route path="/admin/courses" element={<Admincourses />} />
        <Route path="/admin/edition/:course_id" element={<Edition />} />

      </Routes>
  </main>;
};

export default Main;