const { DataTypes } = require('sequelize');
const sequelize = require('./Dbconfig');
const { v4: uuidv4 } = require('uuid');

const Users = sequelize.define('Users', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_image: {
    type: DataTypes.STRING, 
  },
  total_orders: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_logged_in: {
    type: DataTypes.DATE,
  },
});

module.exports = Users;
