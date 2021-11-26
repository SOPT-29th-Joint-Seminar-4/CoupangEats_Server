const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getBanner = async (client) => {
  const { rows } = await client.query(
    `
    SELECT id, image FROM banner b
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getBanner };