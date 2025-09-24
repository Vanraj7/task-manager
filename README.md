# Task Manager

A full-stack Task Manager application with secure authentication, role-based access, CRUD operations, and a simple React frontend for demonstration.
Built with Node.js, Express, MySQL, and React (Vite).
---

## 📌 Features
## 🔐 Authentication & Authorization

- User registration & login with JWT authentication

- Password hashing with bcrypt

- Role-based access control (user vs admin)

## 📝 Tasks Module

- Create, read, update, and delete (CRUD) tasks

- Users see their own tasks

- Admin can view all tasks

## ⚙ Backend

- REST API with Express.js

- Database schema using MySQL + Sequelize

- Input validation with express-validator

- API documentation with Swagger (/api-docs)

## 🎨 Frontend

- Built with React (Vite)

- Register & Login pages

- Protected Dashboard with JWT token storage

- CRUD UI for tasks

- Error/success feedback

## 🔒 Security

- JWT token handling in localStorage

- Input validation & sanitization

- Password hashing with bcrypt

## 🛠️ Tech Stack

**Backend**: Node.js, Express.js, Sequelize, MySQL, JWT, Swagger  
**Frontend**: React (Vite), Axios, React Router
Database: MySQL

---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/primetrade-assignment.git
cd primetrade
```
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create .env file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=primetrade
JWT_SECRET=supersecretkey
```
Run backend:

```bash
Copy code
npm run dev
```
📌 API will be available at:
http://localhost:5000/api/v1

📌 Swagger Docs:
http://localhost:5000/api-docs

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
📌 Frontend will be available at:http://localhost:5173

## 🛠️ API Endpoints
### Auth Routes
- POST /api/v1/auth/register → Register new user

- POST /api/v1/auth/login → Login and receive JWT

### Task Routes (Protected)
- POST /api/v1/tasks → Create task

- GET /api/v1/tasks → Get all tasks (admin sees all, user sees own)

- GET /api/v1/tasks/:id → Get single task

- PUT /api/v1/tasks/:id → Update task

- DELETE /api/v1/tasks/:id → Delete task

## 🔑 Authentication
- After login, a JWT token is returned.

- Token must be passed as Authorization Header:

```makefile
Authorization: Bearer <token>
```
## 🖥️ Frontend Features
- Register and login users

- JWT stored in localStorage

- Dashboard with CRUD operations on tasks

- Role-based access (user vs admin)

## 📖 Scalability Notes
- Microservices → Split auth, tasks, and frontend into separate services in future

- Database Optimization → Indexing, connection pooling

- Caching → Use Redis for frequently accessed queries (e.g., user session)

- Load Balancing → Scale horizontally using Nginx or Kubernetes

- Docker → Containerize backend + frontend for easy deployment

- Logging/Monitoring → Integrate with Winston/ELK or Prometheus + Grafana

