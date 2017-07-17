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

router.get('/exists', function(req, res) {
    var facebookID = req.query.facebookID;

    Diver.findOne({ facebookID: facebookID }).exec(function(err, diver) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not find diver. Stack trace: ' + err });
        } else {
            res.json(diver)
        }
    })
});

router.post('/', function(req, res) {
    Diver.create(req.body, function(err, diver) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not create diver. Stack trace: ' + err });
        } else {
            res.json(diver);
        }
    });
});

module.exports = router;
