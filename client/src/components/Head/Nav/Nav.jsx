<<<<<<< HEAD
import { React } from "react";
=======
>>>>>>> develop

import React from "react";
import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import {  onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'
import Login from '../../Main/Login/Login'
const Nav = () => {
<<<<<<< HEAD
  
=======

  const dispatch = useDispatch()
/*   const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null) */

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
>>>>>>> develop

  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth');
      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      console.log(error.response)
    }
  }
 
     return <nav className={"nav-bar"}>
  <div>
    <img src="" alt={"Logo"} />
  </div>
  <div>
<<<<<<< HEAD
        <a href={"ruta-de-inicio-de-sesion"}>Login</a>
=======
  <input type="search" name="search" onChange={onChange} placeholder="Search" />
  </div>
  <div>
        <Link to="/login">Acceder</Link>
        <Link to="/register">Sign up</Link>
>>>>>>> develop
  </div>


<button onClick={() => logout()} className='btn btn-primary'>Logout</button>
  </nav>;







};

export default Nav;
