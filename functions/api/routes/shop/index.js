const express = require('express');
const router = express.Router();

router.get('/', require('./shopListGET'));
router.put('/:shopId', require('./shopPUT'));

module.exports = router;