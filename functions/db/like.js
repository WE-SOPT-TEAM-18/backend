const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getLike = async (client) => {
  const { rows } = await client.query(
    `
    SELECT content_id, title, image_row, image_column FROM "content"
    WHERE is_liked = true
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const postLike = async (client, contentid) => {
  const { rows } = await client.query(
    `
    UPDATE content SET is_liked = CASE
    WHEN is_liked = true THEN false
    ELSE true
    END
    WHERE content_id = $1
    RETURNING content_id, title, is_liked
    `,
    [contentid]
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getLike, postLike };