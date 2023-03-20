
import React from "react";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'

const Nav = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

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
    <img src="" alt={"Logo"} />
  </div>
  <div>
  <input type="search" name="search" onChange={onChange} placeholder="Search" />
  </div>
  <div>
        <a href={"ruta-de-inicio-de-sesion"}>Login</a>
  </div>


<button onClick={() => logout()} className='btn btn-primary'>
Logout
        </button>
  </nav>;







};

export default Nav;
