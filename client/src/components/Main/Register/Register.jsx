import React from "react";
import { useState } from 'react'
import { onRegistration } from '../../../api/auth'

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    username:'',
    HIV_relationship: '',
    identity: '',
    age: 0


  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => { 
    setValues({ ...values, [e.target.name]: e.target.value }) 
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await onRegistration(values)

      setError('')
      setSuccess(data.message)//mensaje para el usuario
      setValues({ email: '', password: '' })
    } catch (error) {
      setError(error.response.data.errors[0].msg)//mensaje de error para el usuario
      setSuccess('')
    }
  }
  return <section>

  <form onSubmit={(e) => onSubmit(e)} >
  <input type='email' onChange={(e) => onChange(e)} 
            required 
            placeholder="email"  
            id='email'
            name='email'
            value={values.email}/>
  <input type='password' onChange={(e) => onChange(e)} 
            required 
            placeholder="password"
            value={values.password}
            id='password'
            name='password'/>
  <input type='text' onChange={(e) => onChange(e)} 
          required 
          placeholder="username"
          id='username'
          name='username'
          value={values.username}/>
  <input type='text' onChange={(e) => onChange(e)} 
          required 
          placeholder="HIV_Relationship"
          id='HIV_relationship'
          name='HIV_relationship'
          value={values.HIV_relationship}/>
  <input type='text' onChange={(e) => onChange(e)} 
          required 
          placeholder="identity"
          value={values.identity}
          id='identity'
          name='identity'/>
  <input type='number' onChange={(e) => onChange(e)} 
          required 
          placeholder="age"
          value={values.age}
          id='age'
          name='age'/>
  <input type="submit" value="Enviar" />
  </form>


</section>;
};

export default Register;
