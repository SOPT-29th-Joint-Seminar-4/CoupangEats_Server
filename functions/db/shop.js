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

const updateShop = async (client, shopId) => {
  const { rows } = await client.query(
    `
    UPDATE shop s
    SET is_like = NOT is_like
    WHERE id = $1
    RETURNING * 
    `,
    [shopId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getShop, updateShop };