var express = require('express');
var router = express.Router();
var Dive = require('../models/dive');

router.get('/', function(req, res) {
    req.query.skip ? skip = parseInt(req.query.skip) : skip = 0;
    req.query.take ? take = parseInt(req.query.take) : take = 0;

    Dive.find({}).populate('diver').skip(skip).limit(take).sort({ date: -1 }).exec(function(err, dives) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not get dives. Stack trace: ' + err });
        } else {
            res.json(dives);
        }
    });
});

module.exports = router;
