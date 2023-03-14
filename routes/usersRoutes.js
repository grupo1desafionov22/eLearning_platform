const express = require('express')
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");

usersRouter.get('/',usersController.renderUsers);
// usersRouter.post('/',usersController.createUser);




module.exports = usersRouter;
 