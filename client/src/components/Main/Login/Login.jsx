import React, {useEffect } from "react";
/* import {useHistory} from 'react-router';
 */
const Login = () => {
/*   const history = useHistory();
 */
    function handleLogin(e) {
      e.preventDefault()

      const form = e.target;
      const user = {
        username: form[0].value,
        password: form[1].value

      }

      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token',data.token)
      })
      
    }

    useEffect(()=> {
      fetch()
    })



  return <div>Login</div>;
};

export default Login;
