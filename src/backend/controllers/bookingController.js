const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
exports.createBooking = async (req, res) => {
    try {
        const { name, phone, email, destination, travelDate } = req.body;

        // Simple validation
        if (!name || !phone || !destination) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, phone, and destination'
            });
        }

        const booking = await Booking.create({
            name,
            phone,
            email,
            destination,
            travelDate
        });

        res.status(201).json({
            success: true,
            data: booking,
            message: 'Booking saved successfully'
        });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};
