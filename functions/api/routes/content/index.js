const express = require('express');
const router = express.Router();

router.get('/rank', require('./contentRankGET'));

module.exports = router;