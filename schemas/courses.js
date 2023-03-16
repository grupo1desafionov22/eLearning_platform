const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const Courses = db.define("courses", {
  course_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    type: DataTypes.BIGINT,
    defaultValue: false
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  db,
  modelName: 'Courses',
  tableName: 'courses',
  timestamps: true,
  hooks: {
    beforeCreate: (course, options) => {
      course.course_id = uuidv4();
    }
  }
});

Courses.sync();

module.exports = Courses;
