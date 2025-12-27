const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

// All booking routes start with /api/bookings (defined in server.js)
router.post('/', createBooking);

module.exports = router;
