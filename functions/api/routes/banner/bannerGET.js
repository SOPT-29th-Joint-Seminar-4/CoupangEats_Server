const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { bannerDB } = require('../../../db');

module.exports = async (req, res) => {

  const { id } = req.query
  
  if (!id) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  
  let client;
  

  try {
    // db/db.js에 정의한 connect 함수를 통해 connection pool에서 connection을 빌려옵니다.
    client = await db.connect(req);

    // 빌려온 connection을 사용해 우리가 db/[파일].js에서 미리 정의한 SQL 쿼리문을 날려줍니다.
    const bannerImage = await bannerDB.getBanner(client, id);
    
    // 성공적으로 users를 가져왔다면, response를 보내줍니다.
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALL_USERS_SUCCESS, bannerImage));
    
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    
    // 그리고 역시 response 객체를 보내줍니다.
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    
  } finally {
    client.release();
  }
};