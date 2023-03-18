const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Users =db.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logged_in: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      db,
      modelName: 'Users',
      tableName: 'users',
      timestamps: 'true',
      hooks: {
        beforeCreate: async (user, options) => {
          const count = await Users.count();
          user.user_id = count + 1;
        }
      }
  });
  
  
  Users.sync();

module.exports = Users;


//A.hasOne(B) --> 1to1 FK in B
//A.belongsTo(B) --> 1to1 FK in A
//A.hasMany(B) --> 1toMany FK in B
//A.belongsToMany(B,{though:'crosstable'}) --> ManyToMany FK idA and idB in crosstable