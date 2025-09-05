# 📝 Blog Microservices Platform

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![RabbitMQ](https://img.shields.io/badge/Message--Broker-RabbitMQ-orange)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![CI/CD](https://img.shields.io/badge/GitHub-Actions-blueviolet)

## 📌 Overview

This project is a **Blog Platform** built using a **Microservices Architecture** with Node.js, Express, MongoDB, RabbitMQ, and Docker.  
It consists of multiple services communicating via REST and RabbitMQ, all routed through an **API Gateway**.

### ✨ Features

- 🔐 User Authentication (JWT)
- ✍️ Post Management (Create, Read, Update, Delete)
- 💬 Comment Management (Create, Edit, Delete)
- 📡 Inter-service communication via **RabbitMQ**
- 🐳 Containerized with **Docker & Docker Compose**
- ⚡ CI/CD with **GitHub Actions**

---

## 🏗️ Microservices Architecture

```
               +----------------+
               |   API Gateway  |
               |   (Port:5000)  |
               +----------------+
                 /    |     \
                /     |      \
               /      |       \
              v       v        v
   +---------------+  +---------------+  +----------------+
   |  User Service |  |  Post Service |  | Comment Service|
   |   (Port:5001) |  |   (Port:5002) |  |   (Port:5003)  |
   +---------------+  +---------------+  +----------------+
            \             |             /
             \            |            /
              \           |           /
               v          v          v
                 +-----------------+
                 |    RabbitMQ     |
                 |   (5672,15672)  |
                 +-----------------+
```

---

## 🛠️ Tech Stack

- **Backend Framework:** Express.js (TypeScript)
- **Database:** MongoDB
- **Authentication:** JWT + bcrypt
- **Message Broker:** RabbitMQ (amqplib)
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions

---

## 📂 Services

### 🔹 API Gateway (Port 5000)

- Routes requests to microservices:
  - `/user` → User Service
  - `/post` → Post Service
  - `/comment` → Comment Service

### 🔹 User Service (Port 5001)

- **Endpoints:**
  - `POST /signup` → Register new user
  - `POST /signin` → Authenticate user, returns JWT
  - `GET /profile` → Get logged-in user profile (JWT protected)
- **RabbitMQ**: Publishes user data to queue

### 🔹 Post Service (Port 5002)

- **Endpoints:**
  - `POST /createPost` → Create a post (JWT protected)
  - `GET /getAllPost` → Get all posts
  - `GET /getPost/:id` → Get single post
  - `PUT /updatePost/:id` → Update post (JWT protected)
  - `DELETE /deletePost/:id` → Delete post (JWT protected)
- **RabbitMQ**: Consumes user data from queue

### 🔹 Comment Service (Port 5003)

- **Endpoints:**
  - `POST /createComment/:postId` → Add comment (JWT protected)
  - `PATCH /editComment/:commentId` → Edit comment (JWT protected)
  - `DELETE /deleteComment/:commentId` → Delete comment (JWT protected)

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

- Node.js v20+
- MongoDB
- RabbitMQ
- Docker & Docker Compose

### 🔹 Clone Repository

```bash
git clone https://github.com/fawazv/Blog-microservice.git
cd blog-microservices
```

### 🔹 Local Development (without Docker)

Run each service separately:

```bash
# API Gateway
cd backend/gateway
npm install
npm run start

# User Service
cd backend/services/userService
npm install
npm run start

# Post Service
cd backend/services/postService
npm install
npm run start

# Comment Service
cd backend/services/commentService
npm install
npm run start
```

### 🔹 Run with Docker Compose

```bash
docker-compose up --build
```

Services will be available at:

- API Gateway → `http://localhost:5000`
- User Service → `http://localhost:5001`
- Post Service → `http://localhost:5002`
- Comment Service → `http://localhost:5003`
- RabbitMQ Management → `http://localhost:15672` (user: guest / pass: guest)

---

## 🚀 CI/CD Pipeline (GitHub Actions)

- On every push to `master`:
  1. Install & build all services
  2. Build Docker images for each service
  3. Push images to Docker Hub (`fawaz482/*`)
  4. (Optional) Deploy with Docker Compose

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Mohammed Fawaz** – Full Stack Developer  
📍 Kerala, India
