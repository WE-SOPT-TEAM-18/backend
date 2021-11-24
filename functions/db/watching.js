const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllWatchings = async (client) => {
  const { rows } = await client.query(
    `
    SELECT { content_id, title, percent, image_row, is_liked } FROM "watching" w
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getAllWatchings };