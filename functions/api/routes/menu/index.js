const express = require('express');
const router = express.Router();

router.get('', require('./menuGET'));

module.exports = router;