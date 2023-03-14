const express = require('express');
const usersRouter = express.Router();
const usersControllers = require('../controllers/users');


usersRouter.get('/all', usersControllers.getUsers);
usersRouter.post('/create', usersControllers.createUser);
usersRouter.put('/update-one', usersControllers.updateUser);
usersRouter.delete('/delete-one',usersControllers.deleteUser);



module.exports = usersRouter;