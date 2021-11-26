const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getShop = async (client) => {
  const { rows } = await client.query(
    `
    SELECT id, name, delivery_time, rating, comments, distance, is_free, delivery_fee, image FROM shop s
    WHERE is_deleted = FALSE
      AND menu = ''
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getShop };