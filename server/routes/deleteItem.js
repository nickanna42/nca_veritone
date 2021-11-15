const { param, validationResult } = require('express-validator');

const deleteItem = async (req, res, next) => {
  // validators
  // param('itemId').isInt().toInt()(req, res, next);

  // if (validationResults(req).isEmpty()) {
    const itemId = parseInt(req.params['itemId']);
    
    const client = await dbPool.connect();
    await client.query('BEGIN');
    await client.query(
      'DELETE FROM "ShoppingList" WHERE id = $1',
      [itemId]
    );
    await client.query('COMMIT');

    client.release();
    
    res.send('OK');
  // }
  
};

module.exports = deleteItem;