const express = require('express');
const router = express.Router();

router.get('/', require('./likeGET'));
router.post('/:id',require('./likeIdPOST'));

module.exports = router;