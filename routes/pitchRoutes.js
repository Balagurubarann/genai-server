const express = require('express');
const router = express.Router();
const { generatePitch } = require('../controllers/pitchController');
const validateRequest = require('../middleware/validateRequest');

router.post('/', validateRequest, generatePitch);

module.exports = router;
