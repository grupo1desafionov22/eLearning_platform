
//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const userAuth = require('../middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

    /* 
    { 
        "user_id": 23,
        "password": "1234",
        "email": "ana@mail.com",
        "role": "user",
        "logged_in": false,
        "username": "ana",
        "HIV_relationship": "1",
        "identity": "m",
        "birthdate": "1994-06-21"
        
    } */

//login route
//http://localhost:5000/api/users/login
router.post('/login', login )

module.exports = router