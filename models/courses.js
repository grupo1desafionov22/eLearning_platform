const mongoose = require('mongoose');
require('../utils/db_mongo');

const objectSchema = {
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    }
}

const courseSchema = mongoose.Schema(objectSchema);
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

