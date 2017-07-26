var express = require('express');
var router = express.Router();
var Dive = require('../models/dive');
var Diver = require('../models/diver');
var Mongoose = require('mongoose');
var ObjectId = Mongoose.Types.ObjectId;

router.get('/', function(req, res) {
    var diverID = req.query.diverID;
    var stats = {};

    Dive.aggregate([
        {
            $match: {
                diver: ObjectId(diverID)
            }
        },
        {
            $sort: {
                date: 1
            }
        },
        {
            $group: {
                _id: '$diver',
                diveCount: { $sum: 1 },
                totalDiveTime: { $sum: '$minutes' },
                firstDive: { $first: '$date' },
                lastDive: { $last: '$date' },
                maxDepth: { $max: '$maxDepth' }
            }
        }
    ]).exec(function(err, data) {
        stats.diveCount = data[0].diveCount;
        stats.totalDiveTime = data[0].totalDiveTime;
        stats.firstDive = data[0].firstDive;
        stats.lastDive = data[0].lastDive;
        stats.maxDepth = data[0].maxDepth;

        if (err) {
            console.log(err);
            res.status(500).json({ 'Error': 'Could not count dives. Stack trace: ' + err });
        } else {
            Diver.findOne({ _id: diverID }, function(err, diver) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ 'Error': 'Could not count buddies. Stack trace: ' + err });
                } else {
                    stats.buddyCount = diver.buddies.length;
                    res.json(stats);
                }
            });
        }
    });
});

module.exports = router;
