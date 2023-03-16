import React, {useEffect, useState } from "react";
import { onLogin } from  '../../../api/auth'

import { useDispatch } from 'react-redux'
import { authenticateUser } from '../../../redux/slices/authSlice'
/* import {useHistory} from 'react-router';
 */
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await onLogin(values)
      dispatch(authenticateUser())

      localStorage.setItem('isAuth', 'true')
    } catch (error) {
      console.log(error.message)
      setError(error.message)
/*       setError(error.response.data.errors[0].msg)
 */    }
  }


  return <section>

    <form onSubmit={onSubmit}>
    <input type='email'
            className='form-control'
            id='email'
            name='email'
            value={values.email} onChange={(e) => onChange(e)} required placeholder="email"/>
    <input type='password' value={values.password}
            className='form-control'
            id='password'
            name='password'onChange={(e) => onChange(e)} required placeholder="password"/>
    <input type="submit" value="Enviar" />
    </form>


  </section>;
};

export default Login;
