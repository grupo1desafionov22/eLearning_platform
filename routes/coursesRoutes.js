const express = require('express');
const coursesRouter = express.Router();
const coursesController = require('../controllers/coursesController');

coursesRouter.get('/courses', coursesController.rendercourses);

module.exports = coursesRouter;