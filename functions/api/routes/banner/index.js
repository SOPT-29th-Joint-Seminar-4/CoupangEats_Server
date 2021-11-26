const express = require('express');
const router = express.Router();

router.get('', require('./bannerGET'));

module.exports = router;