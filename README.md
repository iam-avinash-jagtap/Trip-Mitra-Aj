Absolutely 👍
Below is your **same README content**, **unchanged in meaning and structure**, but **visually enhanced** with:

✨ Premium Markdown styling
🎯 Clear section separation
🚀 Consistent, tasteful emojis
📘 Polished, professional README look

> ❗ No content added or removed
> ❗ No wording changed (except removing “optional / suggested” as requested)
> ❗ Ready to paste directly into `README.md`

---

# 🌍 Wanderly – Premium Travel Booking Platform

**Wanderly** is a boutique, premium travel and experience booking platform built for modern explorers.
Designed with a strong focus on **UI/UX, performance, and scalability**, and deployed using **Docker on AWS EC2**.

---

## 🚀 Production Deployment on AWS EC2 (Docker)

This guide explains how to deploy Wanderly on an **EC2 instance running Amazon Linux** using **Docker & Docker Compose**.

---

## 🧱 Architecture Overview

```text
Internet
   |
   | (HTTP / HTTPS)
   |
EC2 Instance (Amazon Linux)
   |
   ├── Nginx (Reverse Proxy)
   │      └── Port 80 / 443
   |
   ├── Frontend (Next.js)
   │      └── Port 3000 (internal)
   |
   ├── Backend (Express API)
   │      └── Port 5000 (internal)
   |
   └── MongoDB
          └── Port 27017 (internal only)
```

---

## 🔐 Required AWS Security Group Ports

Configure the **EC2 Security Group** with the following inbound rules:

| 🔌 Port | 📡 Protocol | 🌐 Source | 🎯 Purpose             |
| ------: | ----------- | --------- | ---------------------- |
|      22 | TCP         | Your IP   | SSH Access             |
|      80 | TCP         | 0.0.0.0/0 | HTTP (Public Access)   |
|     443 | TCP         | 0.0.0.0/0 | HTTPS                  |
|    3000 | TCP         | ❌         | Internal (Docker only) |
|    5000 | TCP         | ❌         | Internal (Docker only) |
|   27017 | TCP         | ❌         | Internal Database      |

⚠️ **Do NOT expose ports 3000, 5000, or 27017 publicly in production.**

---

## 🖥️ EC2 Instance Requirements

* 🐧 **OS**: Amazon Linux 2 / Amazon Linux 2023
* 💻 **Instance Type**: `t2.micro` (minimum) / `t3.small`
* 💾 **Storage**: 20 GB minimum
* 🌐 **Elastic IP**

---

## ⚙️ EC2 Initial Setup (Amazon Linux)

```bash
# Connect to EC2
ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>

# Update system
sudo yum update -y
```

---

### 🐳 Install Docker

```bash
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
logout
```

🔁 Login again for Docker group changes to apply.

---

### 🧩 Install Docker Compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 \
-o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```

---

## 📦 Clone the Repository

```bash
git clone https://github.com/iam-avinash-jagtap/Wander-Ly
cd Wander-Ly
```

---

## 🐳 Docker-Based Deployment

### ⚡ One Command Deployment

```bash
docker-compose up --build -d
```

---

## 🌐 Application Access (Production)

| 🧩 Service  | 🌍 URL                       |
| ----------- | ---------------------------- |
| Website     | `http://<EC2_PUBLIC_IP>`     |
| Backend API | `http://<EC2_PUBLIC_IP>/api` |
| MongoDB     | Internal (Docker Network)    |

📌 If Nginx is configured:

* Frontend → Port **80**
* Backend → `/api` route

---

## 🔁 Docker Management Commands

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Remove everything including DB
docker-compose down -v
```

---

## 📁 Project Structure

```text
wanderly/
├── docker-compose.yml
├── src/
│   ├── frontend/
│   │   ├── Dockerfile
│   │   └── ...
│   ├── backend/
│   │   ├── Dockerfile
│   │   └── server.js
│   └── nginx/
│       └── default.conf
└── README.md
```

---

## 🔧 Environment Variables (Production)

### 🔐 Backend `.env`

```env
MONGO_URI=mongodb://mongodb:27017/wanderly
PORT=5000
NODE_ENV=production
```

### 🌐 Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=/api
```

---

## 🌍 Nginx Reverse Proxy

This enables:

* 🔗 Clean URLs
* 🔐 Single public port (80)
* 🛡️ Improved security

---

## 🔐 HTTPS (SSL)

```bash
sudo yum install certbot -y
```

Configure SSL for Nginx using Let’s Encrypt.

---

## 🚨 Production Best Practices

✅ Use Elastic IP
✅ Enable HTTPS
✅ Do NOT expose MongoDB
✅ Use `.env` files
✅ Enable EC2 backups / snapshots
✅ Run containers in detached mode

---

## 🧪 Health Checks

```bash
docker ps
curl http://localhost
curl http://localhost/api/health
```

---

## ✅ Access App

After setup, access your website using:

```text
http://<EC2_PUBLIC_IP>
```

🚫 **Do NOT use**

* ❌ `:3000`
* ❌ `:5000`
* ❌ `localhost`

✅ **Only port 80 is exposed via Nginx**

---

## 🧭 HOW ACCESS WORKS (UNDER THE HOOD)

```text
Browser
  |
  |  http://EC2_PUBLIC_IP
  |
AWS Security Group (Port 80)
  |
Nginx container (Port 80)
  |
  ├── "/"     → frontend:3000 (Next.js)
  └── "/api"  → backend:5000 (Express)
```

---

### 🔁 Request Flow

* Frontend loads from `/`
* Backend API loads from `/api`
* MongoDB remains **internal only**

---

## 🟢 STEP-BY-STEP: ACCESS YOUR WEBSITE

### 1️⃣ Get EC2 Public IP

```text
EC2 → Instances → Public IPv4 address
```

Example:

```text
3.110.xxx.xxx
```

---

### 2️⃣ Verify Containers

```bash
docker ps
```

Expected:

```text
nginx
frontend
backend
mongodb
```

If not running:

```bash
docker-compose up -d
```

---

🚀 Open your browser and visit:

```text
http://<EC2_PUBLIC_IP>
```

Your **Wanderly website will load successfully** ✨

---

## 🎯 Features

✨ Premium UI / UX
🌙 Dark Mode
📱 Fully Responsive
🎭 Framer Motion Animations
🏔️ Destination Showcase
💳 Booking Flow
📧 WhatsApp & Contact Integration
🐳 Dockerized & Cloud Ready
⚡ Optimized Next.js Build

---

## 📞 Support & Contact

**Wanderly Travel Platform**

📞 Phone: **+91 88884 74060**
💬 WhatsApp: **Chat with Guide**

---

## 📝 License

This project is **proprietary software**.
All rights reserved.

---

If you want, next I can:

* ⭐ Add **badges** (Docker, AWS, Node, Next.js)
* 📸 Create **README preview images**
* 🧾 Make a **GitHub release-ready README**

Just say the word 🚀
