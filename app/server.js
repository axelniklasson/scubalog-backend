'use strict';

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* Connect to DB */
const dbHost = 'mongodb://localhost:27017/scubalog';
mongoose.connect(dbHost);

// Init express app
const app = express();
const PORT = process.env.PORT || '8080';

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Routing */
app.use('/', require('./routes/base'));
app.use('/dives', require('./routes/dives'));
app.use('/divers', require('./routes/divers'));

app.listen(PORT);
