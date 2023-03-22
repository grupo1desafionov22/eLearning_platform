import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:5000/api/users/signup',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:5000/api/users/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:5000/api/users/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:5000/api/users/protected')
}