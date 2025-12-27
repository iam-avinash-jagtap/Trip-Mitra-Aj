const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

// All inquiry routes start with /api/inquiries
router.post('/', createInquiry);
router.get('/', getInquiries);

module.exports = router;
