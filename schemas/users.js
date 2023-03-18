const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Users =db.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true, 
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logged_in: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    HIV_relationship: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  }, {
      db,
      modelName: 'Users',
      tableName: 'users',
      timestamps: 'true'
  });
  
  
  Users.sync();

module.exports = Users;


//A.hasOne(B) --> 1to1 FK in B
//A.belongsTo(B) --> 1to1 FK in A
//A.hasMany(B) --> 1toMany FK in B
//A.belongsToMany(B,{though:'crosstable'}) --> ManyToMany FK idA and idB in crosstable
