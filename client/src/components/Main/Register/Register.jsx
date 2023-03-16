import React from "react";
import { useState } from 'react'
import { onRegistration } from '../../../api/auth'

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    role: '',
    username:'',
    HIV_relationship: '',
    identity: '',
    birthdate: ''


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

  <form onSubmit={onSubmit}>
  <input type='email' onChange={(e) => onChange(e)} required placeholder="email" />
  <input type='password' onChange={(e) => onChange(e)} required placeholder="password"/>
  <input type='text' onChange={(e) => onChange(e)} required placeholder="role"/>
  <input type='text' onChange={(e) => onChange(e)} required placeholder="username"/>
  <input type='text' onChange={(e) => onChange(e)} required placeholder="HIV_Relationship"/>
  <input type='text' onChange={(e) => onChange(e)} required placeholder="identity"/>
  <input type='date' onChange={(e) => onChange(e)} required placeholder="birthdate"/>
  <input type="submit" value="Enviar" />
  </form>


</section>;
};

export default Register;
