const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getContentRanking = async (client) => {
  const { rows } = await client.query(
    `
    SELECT content_id, title, image_column as image, rank, is_liked FROM "content"
    ORDER BY rank
    LIMIT 8
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getContentRanking };