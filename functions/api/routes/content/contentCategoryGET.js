const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const categoryNum = require('../../../constants/category');
const db = require('../../../db/db');
const { contentDB } = require('../../../db');

module.exports = async (req, res) => {
  const { category } = req.params;
  if ( !category ) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  
  let client;

  try {
    client = await db.connect(req);

    const contents = await contentDB.getContentByCategory(client, category);
    const data = {
        "category": categoryNum[category - 1],
        "contents": contents,
    };
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CATEGORY_CONTENTS_SUCCESS, data));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};