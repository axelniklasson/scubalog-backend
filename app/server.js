'use strict';

// Import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// Environment settings
if (process.env.NODE_ENV == 'DEV') {
    require('./dev.env.js');
} else {
    require('./prod.env.js');
}

// Init express app
var app = express();
var PORT = process.env.PORT || 8080;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to DB
var dbHost = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DATABASE;
mongoose.connect(dbHost, { useMongoClient: true });

// CORS support
app.use(cors());

// Routing
app.use('/', require('./routes/base'));
app.use('/dives', require('./routes/dives'));
app.use('/divers', require('./routes/divers'));
app.use('/stats', require('./routes/stats'));

app.listen(PORT);
