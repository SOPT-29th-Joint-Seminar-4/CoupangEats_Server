const functions = require('firebase-functions');
const { success, fail } = require('../../../lib/util');
const sc = require('../../../constants/statusCode');
const rm = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { menuDB } = require('../../../db');

module.exports = async (req, res) => {
  let client;
    
  try {
    client = await db.connect(req);

    const menus = await menuDB.getMenu(client);
    res.status(sc.OK).send(success(sc.OK, rm.READ_MENU_SUCCESS, menus));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    
    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    
  } finally {
    client.release();
  }
};