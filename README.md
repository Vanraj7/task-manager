# Primetrade Task Manager

Backend + Frontend project built for **Backend Developer (Intern) Assignment**.  
Implements secure REST API with authentication, role-based access, CRUD operations, and a simple frontend UI for testing.

---

## 🚀 Tech Stack

### Backend
- Node.js + Express
- MySQL (via Sequelize ORM)
- JWT Authentication
- Bcrypt (password hashing)
- Swagger (API Documentation)
- Express Validator (input validation)
- CORS enabled

### Frontend
- React (Vite)
- Axios (API calls)
- React Router DOM (routing)
- LocalStorage (JWT storage)

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

