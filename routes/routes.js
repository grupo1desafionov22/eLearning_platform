const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();


router.post('/createCourse',controller.createCourse);

router.get('/editCourse/:id',controller.getCourse);

router.put('/editCourse/:id',controller.editCourse);
//http://localhost:3000/admin/editMovie/63e13020-22f0-4c55-b6c2-8a6bc691d0da
router.delete('/removeCourse',controller.removeCourse);

router.get('/',controller.getAllCourses);

module.exports = router;