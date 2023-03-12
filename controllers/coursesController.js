const courses = require('../models/courses');

const renderCourses = async (req, res) => {
    try {
        const allCourses = await courses.getAllcourses(req);
        res.status(200).json(allCourses);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving courses');
    }
}

module.exports = {
    renderCourses
}