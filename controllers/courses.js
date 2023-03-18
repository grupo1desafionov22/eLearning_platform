const Courses = require('../schemas/courses');


const getCourses = async (req, res) => {
    const courses = await Courses.findAll();
    res.status(200).json(courses);
};

const getCourseById = async (req, res) => {
    const { course_id } = req.params;
    const course = await Courses.findOne({ where: { course_id } })
    res.status(200).json(course);
};


const createCourse = async (req, res) => {
  const newCourse = req.body;
  const created = await Courses.create(newCourse);
  res.status(201).json(created);
};

const updateCourse = async (req, res) => {
    const update = req.body;
    const updated = await Courses.update(update, { where: { course_id: update.course_id } });
    res.status(200).json(updated);
};

const deleteCourse = async (req, res) => {
    const deleted = await Courses.destroy({ where: { course_id: req.body.course_id} });
    res.status(200).json(deleted);
};




const courses = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
   



};

module.exports = courses;