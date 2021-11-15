const { body, param, validationResult } = require('express-validator');
const { isTrueGTE, isTrueInt } = require('../lib/inputValidators');

const updateItem = async (req, res, next) => {
  // validators
  // body('name').isString().isLength({min: 1})(req, res, next);
  // body('description').isString().isLength({min: 1})(req, res, next);
  // body('quantity').custom(isTrueInt()).custom(isTrueGTE(0))(req, res, next);
  // param('itemId').isInt().toInt()(req, res, next);

  // if (validationResult(req).isEmpty()) {
    const itemId = parseInt(req.params['itemId']);
  
    const client = await dbPool.connect();

    await client.query('BEGIN');
    await client.query(
      'UPDATE "ShoppingList" SET name = $1, description = $2, quantity = $3 WHERE id = $4',
      [req.body.name, req.body.description, req.body.quantity, itemId]
    );
    await client.query('COMMIT');
    client.release();
    
    res.send('OK');
  // }
  
};

module.exports = updateItem;