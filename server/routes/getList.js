const getList = async (_req, res) => {
  const client = await dbPool.connect();
  const listResults = await client.query('SELECT id, name, description, quantity from "ShoppingList"');
  client.release();
  res.json(listResults.rows.map(row => {
    return {
      ...row,
      name: row.name ? row.name : '',
      description: row.description ? row.description : '',
      quantity: row.quantity !== null ? row.quantity : 0, 
    };
  }));
};

module.exports = getList;