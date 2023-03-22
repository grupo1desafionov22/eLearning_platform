
import React from "react";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'
import Login from '../../Main/Login/Login'
import './Nav.css'
import { escape } from 'lodash';

const Nav = () => {

  const dispatch = useDispatch()
  /*   const [loading, setLoading] = useState(true)
    const [protectedData, setProtectedData] = useState(null) */

    const [search, setSearch] = useState("");
    const onChange = (e) => {
      setSearch(escape(e.target.value));
    };

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
    <img  src="../../assets/xox transparente morado.png"/>
    <div>
      <Link to="/login" className="filter">Acceder</Link>
      <Link to="/admin" className="filter">Admin</Link>
    </div>


    <button onClick={() => logout()} className="button-Input" >Logout</button>
  </nav>;
};

export default Nav;
