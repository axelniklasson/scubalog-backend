'use strict';

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

/* Connect to DB */
const dbHost = 'mongodb://localhost:27017/scubalog';
mongoose.connect(dbHost, { useMongoClient: true });

// Init express app
const app = express();
const PORT = process.env.PORT || '8080';

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS support
app.use(cors());

/* Routing */
app.use('/', require('./routes/base'));
app.use('/dives', require('./routes/dives'));
app.use('/divers', require('./routes/divers'));

app.listen(PORT);
