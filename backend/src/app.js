// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth.routes');
const tasksRoutes = require('./routes/tasks.routes');
const { errorHandler } = require('./middlewares/error.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger setup
// src/app.js (Swagger options section)
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Assignment API',
      version: '1.0.0',
      description: 'REST API with JWT Authentication and Role-based Access',
    },
    servers: [{ url: 'http://localhost:' + (process.env.PORT || 5000) }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};


const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes (API versioning)
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', tasksRoutes);

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}).catch(err => {
  console.error('DB connection failed:', err);
});
