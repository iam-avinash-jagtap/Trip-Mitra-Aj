const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/wanderly';
mongoose.connect(MONGO_URI)
    .then(() => console.log(`MongoDB Connected: ${MONGO_URI}`))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.use('/api/bookings', bookingRoutes);

// Basic Route
app.get('/', (req, res) => {
    res.send("Welcome to Wanderly Travel API");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

