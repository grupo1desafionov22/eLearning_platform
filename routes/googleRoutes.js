const express = require('express')

const { signupGoogle, loginGoogle} = require('../controllers/googleController')
const router = express.Router()


router.post("/signup", signupGoogle)

router.post("/login", loginGoogle)

module.exports = router