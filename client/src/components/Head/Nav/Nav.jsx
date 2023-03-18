import React from "react";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  onLogout } from '../../../api/auth'
import { unauthenticateUser } from '../../../redux/slices/authSlice'

const Nav = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }
  return <nav>

<button onClick={() => logout()} className='btn btn-primary'>
Logout
        </button>
  </nav>;
};

export default Nav;
