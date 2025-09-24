// src/models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Task = require('./task.model')(sequelize, Sequelize);

// Relations
db.User.hasMany(db.Task, { foreignKey: 'userId', as: 'tasks' });
db.Task.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

module.exports = db;
