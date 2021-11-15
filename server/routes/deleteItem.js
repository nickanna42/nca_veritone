const { param } = require('express-validator');

const deleteItem = async (req, res, next) => {
  // validators
  param('itemId').isInt().toInt()(req, res, next);

  const client = await dbPool.connect();
  await client.query(
    'DELETE FROM "ShoppingList" WHERE id = $1',
    [req.params.itemId]
  );
  client.release();

  res.status(200).send();
};

module.exports = deleteItem;