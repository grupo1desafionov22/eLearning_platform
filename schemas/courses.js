const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Courses = db.define("courses", {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
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
  length_unit:{
    type: DataTypes.STRING,
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
  timestamps: true
});

Courses.sync();

module.exports = Courses;
