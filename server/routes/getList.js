const getList = async (_req, res) => {
  const client = await dbPool.connect();
  const listResults = await client.query('SELECT * from "ShoppingList"');
  client.release();
  res.json(listResults.rows);
};

module.exports = getList;