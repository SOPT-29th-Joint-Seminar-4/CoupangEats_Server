const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getMenu = async (client) => {
  const { rows } = await client.query(
    `
    SELECT id, name, menu, price, likes, description, image FROM shop s
    WHERE is_deleted = FALSE
      AND menu != ''
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getMenu };