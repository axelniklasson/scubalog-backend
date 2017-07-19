var express = require('express');
var router = express.Router();
var Dive = require('../models/dive');
var Diver = require('../models/diver');

router.get('/', function(req, res) {
    var diverID = req.query.diverID;

    Dive.count({ 'diver': diverID }, function(err, nbrOfDives) {
        if (err) {
            console.log(err);
            res.status(500).json({ 'Error': 'Could not count dives. Stack trace: ' + err });
        } else {
            Diver.findOne({ _id: diverID }, function(err, diver) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ 'Error': 'Could not count buddies. Stack trace: ' + err });
                } else {
                    var stats = {};
                    stats.diveCount = nbrOfDives;
                    stats.buddyCount = diver.buddies.length;
                    res.json(stats);
                }
            });
        }
    });
});

module.exports = router;
