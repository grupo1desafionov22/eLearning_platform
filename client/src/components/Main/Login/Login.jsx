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
        email: form[0].value,
        password: form[1].value

      }
      fetchData(user)
      /* .then(res => res.json())
      .then(data => {
        localStorage.setItem('token',data.token)
      }) */
      
    }

    console.log(document.cookie);
    async function fetchData(user) {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      console.log(res);
        }
   /*  useEffect(()=> {
      fetch()
    }) */




  return <section>

    <form onSubmit={handleLogin}>
    <input type='email' required placeholder="email"/>
    <input type='password' required placeholder="password"/>
    <input type="submit" value="Enviar" />
    </form>


  </section>;
};

export default Login;
