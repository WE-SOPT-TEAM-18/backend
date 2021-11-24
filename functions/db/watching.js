const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllWatchings = async (client) => {
  const { rows } = await client.query(
    `
    SELECT c.content_id, title, c.image_row as image, w.percent, c.is_liked FROM "watching" w JOIN "content" c
    ON c.content_id = w.content_id
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getAllWatchings };