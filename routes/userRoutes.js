const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.post('/register',userController.registerUser);

userRouter.post('/login',userController.userLogin);

userRouter.get('/getCurrentUser',userController.getCurrentUser);