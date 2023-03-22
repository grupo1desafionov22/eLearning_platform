import React, { useState, useEffect } from "react";
import { onRegistration } from '../../../api/auth';
import useFetch from "../../../hooks/useFetch";

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    username:'',
    hiv_relationship: '',
    identity: '',
    age: 0
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  const onChange = (e) => { 
    setValues({ ...values, [e.target.name]: e.target.value }) 
    if (e.target.name === 'password') {
      setIsPasswordValid(passwordRegex.test(e.target.value))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!isPasswordValid) {
      setError('Password should have at least 8 characters, 1 letter, and 1 number')
      setSuccess('')
      return
    }

    try {
      const { data } = await onRegistration(values)
      setError('')
      setSuccess(data.message)//mensaje para el usuario
      setValues({
        email: '',
        password: '',
        username: '',
        hiv_relationship: '',
        identity: '',
        age: 0
      })
    } catch (error) {
      console.log(error);
      setError(error.message)
      //mensaje de error para el usuario
      setSuccess('')
    }
  }

  const  handleGoogle = useFetch("http://localhost:5000/google/signup");


  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "continue_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);






  return <section>

  <form className="register_form" onSubmit={(e) => onSubmit(e)} >
    <span className="input">
  <label htmlFor="username">Nombre de usuario</label>
  <input type='text' onChange={(e) => onChange(e)} 
          required 
          className='button-Input'
          placeholder="Nombre de usuario"
          id='username'
          name='username'
          value={values.username}/>
    </span>
    <span className="input">
<label htmlFor="age">Edad</label>
<input type='number' onChange={(e) => onChange(e)} 
          required 
          className='button-Input'
          placeholder="age"
          value={values.age}
          id='age'
          name='age'/>
    </span>
    <span className="input">
<label htmlFor="identity">Género</label>
<input type='text' onChange={(e) => onChange(e)} 
          className='button-Input'
          placeholder="Identidad de género"
          value={values.identity}
          id='identity'
          name='identity'/>
    </span>
    <span className="input">

  <label htmlFor="email">Mail</label>
  <input type='email' onChange={(e) => onChange(e)} 
            className='button-Input'
            required 
            placeholder="Email"  
            id='email'
            name='email'
            value={values.email}/>
    </span>
    <span className="input">
  <label htmlFor="password">Contraseña</label>
  <input type='password' onChange={(e) => onChange(e)} 
            required 
            className='button-Input'
            placeholder="Contraseña"
            value={values.password}
            id='password'
            name='password'/>
    </span>
    <span className="input">
  <label htmlFor="hiv_relationship">Relación con el VIH</label>
  <input type='text' onChange={(e) => onChange(e)} 
          required 
          className='button-Input'
          placeholder="Relación Con el VIH"
          id='hiv_relationship'
          name='hiv_relationship'
          value={values.hiv_relationship}/>
    </span>
  <input type="submit" className='button-Input' value="Enviar" />
  </form>

  <div>{error}</div>
  <div >{success}</div>




  <div className="input" id="signUpDiv" data-text="signup_with"></div>

</section>
};

export default Register;
