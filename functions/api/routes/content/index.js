const express = require('express');
const router = express.Router();

router.get('/rank', require('./contentRankGET'));
router.get('/:category', require('./contentCategoryGET'));

module.exports = router;