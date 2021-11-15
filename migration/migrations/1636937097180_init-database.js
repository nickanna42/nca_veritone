/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('ShoppingList', {
        id: {
            primaryKey: true,
            type: 'serial',
        },
        name: {
            type: 'varchar(160)',
        },
        description: {
          type: 'varchar(1024)',
        },
        quantity: {
          type: 'smallint',
        },
    });
};

// exports.down = pgm => {};
