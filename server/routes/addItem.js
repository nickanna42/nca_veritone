const { body } = require('express-validator');
const { isTrueGTE, isTrueInt } = require('../lib/inputValidators');
 
const addItem = async (req, res, next) => {
    // validation
    body('name').isString().isLength({min: 1})(req, res, next);
    body('description').isString().isLength({min: 1})(req, res, next);
    body('quantity').custom(isTrueInt()).custom(isTrueGTE(0))(req, res, next);

    const client = await dbPool.connect();
    const dataInsert = await client.query(
        'INSERT INTO "ShoppingList" (name, description, quantity) VALUES ($1, $2, $3) RETURNING id',
        [ req.body.name, req.body.description, req.body.quantity ]
    );
    client.release();

    res.json(dataInsert.rows[0].id);
};

module.exports = addItem;