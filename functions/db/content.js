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

const getContentByCategory = async (client, categoryNum) => {
  const { rows } = await client.query(
    `
    SELECT content_id, title, image_row as image, is_liked FROM "content"
    WHERE category_num = $1
    LIMIT 8
    `,
    [categoryNum]
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getContentRanking, getContentByCategory };