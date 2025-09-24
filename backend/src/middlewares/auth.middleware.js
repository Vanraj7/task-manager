// src/middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: 'No token provided' });
    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ message: 'Invalid token format' });

    const token = parts[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

const authorize = (roles = []) => {
  // roles: array or single string
  if (typeof roles === 'string') roles = [roles];
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    if (roles.length && !roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
    next();
  };
};

module.exports = { authenticate, authorize };
