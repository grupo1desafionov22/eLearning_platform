import React, { useState, useEffect } from "react";
import { onLogin } from  '../../../api/auth';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../../redux/slices/authSlice';
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { setUserRole } from '../../../redux/slices/userSlice';
import DOMPurify from 'dompurify';
import moradoImage from '../../assets/morado.png';

const Login = () => {


  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // eslint-disable-next-line 
  const [error, setError] = useState(false);
  const onChange = (e) => {
    const name = e.target.name;
    const value = DOMPurify.sanitize(e.target.value);
    setValues({ ...values, [name]: value });
  }
  
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to login the user
      const response = await onLogin(values);
      // Retrieve the user's role from the response
      const userRole = response.data.role;
      // Set the user's role in the Redux store
      dispatch(setUserRole(userRole));
      // Set the user's authentication status in the Redux store
      dispatch(authenticateUser());
      // Set the user's authentication status in local storage
      localStorage.setItem('isAuth', 'true');
      // Set the user's role in local storage
      localStorage.setItem('userRole', userRole);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }
  //Google login
  const  handleGoogle = useFetch(
    "http://localhost:5000/google/login"
  );

  useEffect(() => {
    /* global google */

    if (window.google) {
    
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return <section className="register_form">

    <img className="logo" src={moradoImage} alt="My" />
    <h3>Nos alegra volver a verte</h3>

    <form onSubmit={onSubmit}>
      <label htmlFor="email">Usuario</label>
    <input type='email'
            className='button-Input'
            id='email'
            name='email'
            value={DOMPurify.sanitize(values.email)} onChange={(e) => onChange(e)} required placeholder="Email"/>
      <label htmlFor="password">Contraseña</label>
    <input type='password' value={values.password}
            id='password'
            className='button-Input'
            name='password'onChange={(e) => onChange(e)} required placeholder="Contraseña"/>
    <input type="submit" className='button-Input' value="Enviar" />
    </form>
    
    <div id="loginDiv"></div>

    <Link to="/register">Si aún no tienes cuenta registrate aquí</Link>

  </section>;
};

export default Login;
