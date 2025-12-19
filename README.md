# Vistara - Premium Travel Booking Platform

## 🌍 Project Overview
A high-end, aesthetic, and high-performance travel booking website for booking trips across India. Built with a modern tech stack focusing on user experience, visual appeal, and speed.

## 🏗️ Architecture

### Frontend (User Interface)
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

### Backend (API & Data) - *In Progress*
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT / Auth0 (Planned)
- **Payments**: Stripe (Planned)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**
2.  **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
3.  **Backend Setup**:
    ```bash
    cd backend
    npm install
    node server.js
    ```

## 🎨 Design System
- **Colors**:
    - Primary Blue: `#1A73E8`
    - Forest Green: `#2C5F2D`
    - Gold Accent: `#E5B80B`
    - Beige: `#E8DCC8`
- **Typography**:
    - Headings: *Poppins*
    - Body: *Inter*

## 📁 Project Structure
```
Travel-Web/
├── frontend/          # Next.js Application
│   ├── src/
│   │   ├── app/       # Pages & Layouts
│   │   ├── components/# Reusable Components
│   │   │   ├── home/  # Home specific components (Hero, Cards)
│   │   │   ├── layout/# Navbar, Footer
│   │   │   └── ui/    # Generic UI elements
│   │   └── lib/       # Utilities
│   └── public/        # Static Assets (Images)
└── backend/           # Node.js/Express API
    └── server.js      # Entry point
```
