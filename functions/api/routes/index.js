const express = require('express');
const router = express.Router();

router.use('/watching', require('./watching'));

module.exports = router;
