const Inquiry = require('../models/Inquiry');

// @desc    Create a new inquiry
// @route   POST /api/inquiries
// @access  Public
exports.createInquiry = async (req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;

        // Validation
        if (!name || !phone || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const inquiry = await Inquiry.create({
            name,
            phone,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            data: inquiry,
            message: 'Inquiry sent successfully'
        });
    } catch (error) {
        console.error('Inquiry Error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Public
exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: inquiries.length,
            data: inquiries
        });
    } catch (error) {
        console.error('Fetch Inquiries Error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};
