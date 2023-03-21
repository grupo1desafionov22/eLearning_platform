
//importing modules
const express = require('express')

const { signup, login, protect, logout} = require('../controllers/userController')
const validator = require('../middlewares/validation_middleware')
const { userAuth } = require('../middlewares/auth_middleware')
const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', validator.saveUser, signup)



    /* 
    { 
        "user_id": 23,
        "password": "1234",
        "email": "ana@mail.com",
        "role": "user",
        "logged_in": false,
        "username": "ana",
        "hiv_relationship": "1",
        "identity": "m",
        "birthdate": "1994-06-21"
        
    } */

//login route
//http://localhost:5000/api/users/login
router.post('/login', login )
router.get('/logout', logout )

router.get('/protected', userAuth, protect)

module.exports = router