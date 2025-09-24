// src/models/task.model.js
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.ENUM('todo','in-progress','done'), defaultValue: 'todo' }
  }, {
    tableName: 'tasks'
  });
  return Task;
};
