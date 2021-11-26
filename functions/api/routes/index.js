const express = require('express');
const router = express.Router();

router.use('/menu', require('./menu'));
router.use('/shop', require('./shop'));
router.use('/banner', require('./banner'));

module.exports = router;