/**
*** Server routing instructions
**/
const express = require('express');

module.exports = function(app) {
    app.use(express.json())
    // API Endpoint Handlers
    app.post('/api/list/item/:itemId', routes.updateItem);

    app.delete('/api/list/item/:itemId', routes.deleteItem);

    app.get(/^\/api\/list$/, routes.getList);

    app.post(/^\/api\/list\/item$/, routes.addItem);


    // Single-Page Application Page Server Logic
    // Must be last after API route
    // app.use(routes.handleSPA);

    // app.use((_req, res) => {
    //     res.status(404).send('Not Found');
    // });
};