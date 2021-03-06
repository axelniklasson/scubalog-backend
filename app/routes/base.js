var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        name: 'scubalog-backend',
        version: 'v1',
        env: process.env.NODE_ENV,
        status: 'running',
        author: 'Axel Niklasson <hello@axelniklasson.se>'
    });
});

module.exports = router;
