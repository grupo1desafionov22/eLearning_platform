
import React from "react";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'
import Login from '../../Main/Login/Login'

const Nav = () => {

  const dispatch = useDispatch()
  /*   const [loading, setLoading] = useState(true)
    const [protectedData, setProtectedData] = useState(null) */

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
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
    <div>
      <img src="logoyellow.png" alt={"Logo"} />
    </div>
    <div>
      <Link to="/login" className="buttonCard"><p className="filter">Acceder</p></Link>
      </div>
      <div>
      <Link to="/register" className="buttonCard"><p className="filter">Sign Up</p></Link>
    </div>


    <button onClick={() => logout()} className="button-Input" >Logout</button>
  </nav>;
};

export default Nav;
