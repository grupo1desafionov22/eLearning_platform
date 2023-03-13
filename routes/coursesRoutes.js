const express = require('express');
const coursesRouter = express.Router();
const coursesController = require('../controllers/coursesController');



//coursesRouter.get('/courses', coursesController.renderCourses);
coursesRouter.post('/courses', coursesController.createCourse);

//http://localhost:5000/editCourse/dtfygh23hj
coursesRouter.get('/editCourse/:id',coursesController.getCourse);

coursesRouter.put('/editCourse/:id',coursesController.editCourse);

coursesRouter.delete('/removeCourse',coursesController.removeCourse);


//http://localhost:5000/allCourses
coursesRouter.get('/allCourses',coursesController.getAllCourses);


module.exports = coursesRouter;