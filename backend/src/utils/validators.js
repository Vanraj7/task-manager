// src/utils/validators.js
const { body } = require('express-validator');

const registerValidator = [
  body('name').isLength({ min: 2 }).withMessage('Name too short'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

const loginValidator = [
  body('email').isEmail(),
  body('password').exists()
];

const taskValidator = [
  body('title').isString().isLength({ min: 1 })
];

module.exports = { registerValidator, loginValidator, taskValidator };
