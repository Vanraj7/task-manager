// src/routes/tasks.routes.js
const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { taskValidator } = require('../utils/validators');
const { validationResult } = require('express-validator');

/**
 * @openapi
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: My first task
 *               description:
 *                 type: string
 *                 example: This is a test task
 *               status:
 *                 type: string
 *                 enum: [todo, in-progress, done]
 *                 example: todo
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post('/', authenticate, taskValidator, (req, res, next) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) return res.status(400).json({ errors: errs.array() });
  return tasksController.createTask(req, res, next);
});

/**
 * @openapi
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks (admin sees all, user sees own)
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get('/', authenticate, tasksController.getTasks);

/**
 * @openapi
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task details
 *       404:
 *         description: Task not found
 */
router.get('/:id', authenticate, tasksController.getTaskById);

/**
 * @openapi
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Task Title
 *               description:
 *                 type: string
 *                 example: Updated description
 *               status:
 *                 type: string
 *                 enum: [todo, in-progress, done]
 *                 example: done
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 */
router.put('/:id', authenticate, tasksController.updateTask);

/**
 * @openapi
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete('/:id', authenticate, tasksController.deleteTask);

module.exports = router;
