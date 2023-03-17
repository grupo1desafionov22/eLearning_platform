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
    beforeCreate: async (course, options) => {
      const count = await Courses.count();
      course.id = count + 1;
    }
  }
});

Courses.sync();

module.exports = Courses;
