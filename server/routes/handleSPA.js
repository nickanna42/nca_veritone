const { resolve: pathResolve } = require('path');

const handleSPA = (req, res, next) => {
    if (req.get('sec-fetch-mode') === 'navigate') {
        res.sendFile('index.html', {
            root: pathResolve(__dirname, '../public'),
        });
    } else {
        next();
    }
};

module.exports = handleSPA;