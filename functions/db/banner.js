const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getBanner = async (client, osId) => {
  const { rows } = await client.query(
    `
    SELECT id, image FROM banner b
    WHERE id = $1
    `,
    [osId],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getBanner };