const express = require('express');
const coursesRouter = express.Router();
const courses = require('../controllers/courses');


coursesRouter.get('/all', courses.getCourses);
coursesRouter.get('/one', courses.getCourseById);
coursesRouter.post('/create', courses.createCourse);
coursesRouter.put('/update-one', courses.updateCourse);
coursesRouter.delete('/delete-one', courses.deleteCourse);


module.exports = coursesRouter;