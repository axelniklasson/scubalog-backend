var express = require('express');
var router = express.Router();
var Diver = require('../models/diver');

router.get('/', function(req, res) {

    Diver.find({}).sort({ name: 1 }).exec(function(err, divers) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not get divers. Stack trace: ' + err });
        } else {
            res.json(divers);
        }
    });
});

module.exports = router;
