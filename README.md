# 🌍 Wanderly — Premium Travel Booking Platform

**Wanderly** is a modern, production-ready **travel booking & inquiry platform** designed for real-world scalability and cloud deployment.

It supports:

* 🧳 Real-time trip bookings
* 📩 Contact & inquiry management
* 📊 Admin dashboards (Bookings & Inquiries)
* 🐳 Fully Dockerized architecture
* ☁️ Cloud-native deployment on AWS

---

## 🧠 Tech Stack

### 🌐 Frontend

* **Next.js 14**
* **TypeScript**
* Modern UI / UX (Admin dashboards, tables)

### ⚙️ Backend

* **Node.js**
* **Express.js**
* REST APIs (`/api/bookings`, `/api/inquiries`)

### 🗄️ Database

* **MongoDB**
* Persistent Docker volume (no data loss)

### 🚦 Reverse Proxy

* **Nginx**
* Single public entry point (Port 80)

### 🐳 Containerization

* **Docker**
* **Docker Compose**
* Images hosted on **Docker Hub**

---

## 🧱 Architecture Overview

```
Internet
   |
   |  HTTP (Port 80)
   |
AWS EC2
   |
   ├── Nginx (Reverse Proxy)
   │      ├── /        → Frontend (Next.js)
   │      └── /api     → Backend (Express)
   |
   ├── Frontend Container
   ├── Backend Container
   └── MongoDB Container (Internal only)
```

✔ Secure
✔ Scalable
✔ Production-grade

---

## ☁️ Setup — AWS

### ✅ EC2 Requirements

* **OS**: Amazon Linux 2 / Amazon Linux 2023
* **Instance Type**: `t2.micro` (minimum) / `t3.small` recommended
* **Storage**: 20 GB
* **Security Group**:

  * Port `22` → SSH
  * Port `80` → HTTP
  * ❌ Do NOT expose MongoDB

---

## 🚀 Quick Start (Production)

### 🔥 Only Two Commands Needed

Once Docker & Docker Compose are installed on EC2:

```bash
docker-compose pull
docker-compose up -d
```

That’s it ✅
No build. No source code required.

---

## 🧠 What `docker-compose.yml` Creates

When you run `docker-compose up -d`, it automatically creates:

### 🔹 Containers

* `wanderly-frontend` → Next.js UI
* `wanderly-backend` → Express APIs
* `wanderly-mongodb` → Database
* `wanderly-nginx` → Reverse proxy

### 🔹 Network

* `wanderly-network`
* Private communication between containers

### 🔹 Storage

* `wanderly-storage`
* Persistent MongoDB data across restarts

### 🔹 Security

* Only **Nginx (Port 80)** is public
* Backend & DB remain internal

---

## 🌐 Application Access

| Feature         | URL                         |
| --------------- | --------------------------- |
| Website         | `http://<SERVER_PUBLIC_IP>` |
| Admin Bookings  | `/admin/bookings`           |
| Admin Inquiries | `/admin/inquiries`          |
| Backend API     | `/api`                      |

---

## 🧪 Health Checks

```bash
docker ps
curl http://localhost
curl http://localhost/api/bookings
curl http://localhost/api/inquiries
```

---

## 🎯 Where Else Can This Project Be Used?

Wanderly is **cloud-agnostic** and can be deployed in multiple enterprise environments.

---

## 🟣 Terraform (Infrastructure as Code)

### 🔹 How to Use

* Use Terraform to:

  * Create EC2
  * Configure Security Groups
  * Attach Elastic IP
  * Provision Docker

### 🔹 Flow

```text
Terraform → EC2 → Docker → docker-compose up
```

### 🔹 Benefit

* Fully reproducible infrastructure
* Version-controlled AWS resources
* Ideal for production environments

---

## 🟡 GitLab CI (CI/CD Pipeline)

### 🔹 How to Use

* Build Docker images in GitLab Runner
* Push images to Docker Hub
* Auto-deploy to EC2 using SSH

### 🔹 Flow

```text
Git Push → GitLab CI → Docker Build → Docker Hub → EC2 Pull
```

### 🔹 Benefit

* Automated deployments
* Zero manual intervention
* Fast release cycles

---

## 🟢 Amazon EKS (Kubernetes)

### 🔹 How to Use

* Convert Docker images to Kubernetes Deployments
* Use:

  * `Deployment`
  * `Service`
  * `Ingress (Nginx Controller)`
* MongoDB via StatefulSet or managed service

### 🔹 Flow

```text
Docker Images → EKS → Pods → Ingress → Users
```

### 🔹 Benefit

* Auto-scaling
* High availability
* Enterprise-grade orchestration

---

## 🔐 Production Best Practices

✅ Use HTTPS (Let’s Encrypt)
✅ Use Elastic IP
✅ Keep MongoDB internal
✅ Use Docker Hub images
✅ Enable EC2 backups
✅ Use CI/CD for deployments

---

## 🏁 Final Notes

This project is:

* 🚀 Production-ready
* 🔐 Secure by design
* 🧩 Easily extendable
* 🏢 Suitable for startups & enterprises

---

## 📝 License

This project is proprietary software.
All rights reserved.

---

✨ **Wanderly is built to scale — from EC2 to EKS.**
