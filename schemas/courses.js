const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Courses = db.define("courses", {
  course_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  course_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course_description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  format: {
    type: DataTypes.STRING,
    allowNull: false
  },
  length: {
    type: DataTypes.STRING,
    defaultValue: false
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lessons: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
}, {
  db,
  modelName: 'Courses',
  tableName: 'courses',
  timestamps: true,
  hooks: {
    beforeCreate: async (course, options) => {
      const lastCourse = await Courses.findOne({
        order: [ [ 'course_id', 'DESC' ]]
      });
      course.course_id = lastCourse ? lastCourse.course_id + 1 : 1;
    }
  }
});

Courses.sync();

module.exports = Courses;
