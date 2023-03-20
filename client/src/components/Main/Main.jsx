import React, {useState,useEffect} from "react";
import { Routes, Route, Navigate, Outlet  } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Details from './Details';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import { useSelector } from 'react-redux';

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
  return <main>
    Main
    <Routes>
      {/*   <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        </Route>
    */}
      
        <Route
          path="/"
          element={user?.email || isAuth ? <Navigate to="/home" /> : <Admin />}
        />
        <Route
          path="/signup"
          element={user?.email || isAuth  ? <Navigate to="/home" /> : <Register/>}
        />
        <Route
          path="/login"
          element={user?.email || isAuth  ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={user?.email || isAuth  ? <Home user={user} /> : <Navigate to="/" />}
        />
          <Route path="*" element={<NotFound />} />
      </Routes>
  </main>;
};

export default Main;
