const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { likeDB } = require('../../../db');


module.exports = async (req, res) => {
    const { id } = req.params;
    if ( !id ) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

    try {
      client = await db.connect(req);
      const likes = await likeDB.postLike(client, id);
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ADD_LIKE_CONTENTS_SUCCESS, likes));
    } catch (error) {
      functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    } finally {
      client.release();
    }
  };