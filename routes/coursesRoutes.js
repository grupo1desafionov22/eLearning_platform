const express = require('express');
const coursesRouter = express.Router();
const courses = require('../controllers/courses');


coursesRouter.get('/all', courses.getCourses);
coursesRouter.get('/:course_id', courses.getCourseById);
coursesRouter.post('/create', courses.createCourse);
coursesRouter.put('/update-one/:course_id', courses.updateCourse);
coursesRouter.delete('/delete-one', courses.deleteCourse);

coursesRouter.get('/explore', courses.getCourseExplore);

module.exports = coursesRouter;