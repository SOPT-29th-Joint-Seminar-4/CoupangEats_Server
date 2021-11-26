const express = require('express');
const router = express.Router();

router.get('', require('./shopListGET'));

module.exports = router;