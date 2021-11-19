const express = require('express');
const router = express.Router();

// '/user/:userId'로 오는 요청을 userGET 파일에서 처리
router.get('/:userId', require('./userGET'));

module.exports = router;
