const express = require('express');
const router = express.Router();

router.use('/menu', require('./menu'));

module.exports = router;