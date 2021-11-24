const express = require('express');
const router = express.Router();

router.use('/watching', require('./watching'));
router.use('/content', require('./content'));

module.exports = router;
