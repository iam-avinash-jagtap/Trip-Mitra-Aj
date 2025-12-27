# Wanderly - Premium Travel Booking Platform 🌍

A boutique, premium travel and experience booking platform for modern explorers. Built with cutting-edge technologies to deliver stunning visuals, smooth animations, and exceptional user experience.

## 🚀 Quick Start with Docker

### Prerequisites
- [Docker](https://www.docker.com/get-started) (version 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 2.0+)

### One-Command Deployment

```bash
docker-compose up --build
```

That's it! The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **MongoDB**: localhost:27017

### Stop the Application

```bash
docker-compose down
```

To remove all data (including database):
```bash
docker-compose down -v
```

---

## 🏗️ Architecture

### Technology Stack

#### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: next-themes (Dark/Light mode)
- **PDF Generation**: jsPDF + html2canvas
- **Effects**: canvas-confetti

#### Backend
- **Runtime**: Node.js 18
- **Framework**: Express.js 5
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv
- **CORS**: Configured for cross-origin requests

#### DevOps
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx (production ready)

---

## � Manual Installation (Without Docker)

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- MongoDB 6+ ([Download](https://www.mongodb.com/try/download/community))

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd wonderly
```

### Step 2: Backend Setup

```bash
cd src/backend

# Install dependencies
npm install

# Create .env file
echo "MONGO_URI=mongodb://localhost:27017/wanderly
PORT=5000" > .env

# Start MongoDB (if running locally)
# Then start the backend
node server.js
```

Backend will run at: **http://localhost:5000**

### Step 3: Frontend Setup

```bash
cd src/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at: **http://localhost:3000**

---

## 🐳 Docker Deployment Guide

### Understanding the Docker Setup

The application uses a **multi-container** architecture with three services:

1. **Frontend** - Next.js application (Port 3000)
2. **Backend** - Express API (Port 5000)
3. **MongoDB** - Database (Port 27017)

### File Structure

```
wonderly/
├── docker-compose.yml           # Orchestrates all services
├── src/
│   ├── frontend/
│   │   ├── Dockerfile          # Frontend container config
│   │   ├── package.json
│   │   └── ...
│   └── backend/
│       ├── Dockerfile          # Backend container config
│       ├── package.json
│       └── server.js
└── README.md
```

### Step-by-Step Docker Deployment

#### 1. Build All Images

```bash
docker-compose build
```

This command:
- Builds the frontend Next.js image
- Builds the backend Express image
- Pulls the MongoDB image from Docker Hub

#### 2. Start All Services

```bash
docker-compose up
```

Or to run in detached mode (background):
```bash
docker-compose up -d
```

#### 3. View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mongodb
```

#### 4. Restart a Service

```bash
docker-compose restart frontend
docker-compose restart backend
```

#### 5. Stop Services

```bash
docker-compose stop
```

#### 6. Remove Containers

```bash
docker-compose down
```

#### 7. Clean Everything (including volumes)

```bash
docker-compose down -v
docker system prune -a
```

### Troubleshooting Docker Issues

#### Issue: Port Already in Use

```bash
# Find what's using the port
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill the process (Windows)
taskkill /PID <process_id> /F
```

#### Issue: Database Connection Failed

```bash
# Check if MongoDB container is running
docker-compose ps

# Restart MongoDB
docker-compose restart mongodb

# View MongoDB logs
docker-compose logs mongodb
```

#### Issue: Build Failures

```bash
# Clean build
docker-compose down
docker-compose build --no-cache
docker-compose up
```

#### Issue: Frontend Image Issues

```bash
# Add these domains to next.config.js if seeing image errors
# (already configured in current setup)
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (`#4338ca`)
- **Secondary**: Grey shades
- **Accent**: Teal (`#0d9488`)
- **Coral**: `#FF7F50`
- **Sand**: `#F5F2E9`
- **Gold**: `#D4AF37`

### Typography
- **Display Font**: Manrope (Bold headings)
- **Body Font**: Inter (Readable text)
- **Serif Font**: Instrument Serif (Elegant accents)

### Components
- Glassmorphism effects
- Smooth scroll animations
- Premium card designs
- Responsive navigation
- Dark/Light mode toggle

---

## 📁 Project Structure

```
wonderly/
├── src/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── page.tsx           # Home page
│   │   │   │   ├── offers/            # Rishikesh package
│   │   │   │   ├── destinations/      # Travel destinations
│   │   │   │   ├── book/              # Booking page
│   │   │   │   ├── contact/           # Contact form
│   │   │   │   └── layout.tsx         # Root layout
│   │   │   ├── components/
│   │   │   │   ├── home/              # Home components
│   │   │   │   │   ├── Hero.tsx
│   │   │   │   │   ├── DestinationCard.tsx
│   │   │   │   │   ├── InspirationSection.tsx
│   │   │   │   │   └── TrustSection.tsx
│   │   │   │   ├── layout/            # Layout components
│   │   │   │   │   ├── Navbar.tsx
│   │   │   │   │   └── Footer.tsx
│   │   │   │   └── theme-provider.tsx
│   │   │   ├── data/
│   │   │   │   └── destinations.ts    # Destination data
│   │   │   ├── lib/                   # Utilities
│   │   │   └── globals.css            # Global styles
│   │   ├── public/
│   │   │   └── images/                # Static images
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   ├── package.json
│   │   └── Dockerfile
│   └── backend/
│       ├── server.js                  # Express server
│       ├── package.json
│       ├── .env
│       └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚢 Production Deployment

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Backend (.env)
```env
MONGO_URI=mongodb://mongodb:27017/wanderly
PORT=5000
NODE_ENV=production
```

### Build for Production

```bash
# Frontend
cd src/frontend
npm run build
npm start

# Backend
cd src/backend
NODE_ENV=production node server.js
```

### Docker Production Build

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

---

## 🧪 Development Tips

### Hot Reload
Both frontend and backend support hot reload in development mode.

### Code Quality
```bash
# Frontend linting
cd src/frontend
npm run lint
```

### Clear Cache
```bash
# Frontend
rm -rf .next
npm run dev

# Docker
docker-compose down
docker-compose build --no-cache
```

---

## 📞 Support & Contact

- **Website**: Wanderly Travel Platform
- **Phone**: +91 88884 74060
- **WhatsApp**: [Chat with Guide](https://wa.me/918888474060)

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 🎯 Features

- ✨ **Premium UI/UX** - Modern, clean, and aesthetic design
- 🌙 **Dark Mode** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Perfect on all devices
- 🎭 **Smooth Animations** - Framer Motion powered
- 🏔️ **Destination Showcase** - Beautiful travel cards
- 💳 **Booking System** - Complete booking flow
- 📧 **Contact Integration** - Phone & WhatsApp support
- 🐳 **Docker Ready** - One-command deployment
- ⚡ **Fast Performance** - Optimized Next.js build

---

**Built with ❤️ for travelers, by travelers**
