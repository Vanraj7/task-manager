// src/controllers/tasks.controller.js
const { Task } = require('../models');

const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status, userId: req.user.id });
    return res.status(201).json(task);
  } catch (err) { next(err); }
};

const getTasks = async (req, res, next) => {
  try {
    // Admin can see all tasks; user sees their own
    const where = req.user.role === 'admin' ? {} : { userId: req.user.id };
    const tasks = await Task.findAll({ where });
    return res.json(tasks);
  } catch (err) { next(err); }
};

const getTaskById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (req.user.role !== 'admin' && task.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    return res.json(task);
  } catch (err) { next(err); }
};

const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (req.user.role !== 'admin' && task.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    await task.update(req.body);
    return res.json(task);
  } catch (err) { next(err); }
};

const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (req.user.role !== 'admin' && task.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    await task.destroy();
    return res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
