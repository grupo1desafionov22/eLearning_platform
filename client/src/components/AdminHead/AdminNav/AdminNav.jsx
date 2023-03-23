import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'

const AdminNav = () => {

  const dispatch = useDispatch()


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
  return <nav className={"admin-nav-bar"}>
  <Link to="/admin/courses" className="buttonCard">Cursos</Link>
  <Link to="" className="buttonCard">Comunidad </Link>
  <Link to="" className="buttonCard">Explora </Link> 
  <button onClick={() => logout()} className="button-Input" >Logout</button>
</nav>;
};

export default AdminNav;
