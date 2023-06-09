
import React from "react";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'
import './Nav.css'
import moradoImage from '../../assets/morado.png';
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
      localStorage.removeItem("userRole");

      window.location.reload();
    } catch (error) {
      console.log(error.response)
    }
  }

  return <nav className={"nav-bar"}>
    <img className="logo" src={moradoImage} alt="My" />
    <Link to="/login" className="buttonCard"><p className="filter"> Acceder</p> </Link>
    <Link to="/admin"  className="buttonCard"><p className="filter">Admin</p></Link>
    <button onClick={() => logout()} className="button-Input" >Logout</button>
  </nav>;
};

export default Nav;
