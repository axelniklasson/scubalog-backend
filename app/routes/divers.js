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
    var diver = req.body;
    diver.buddies = [];
    Diver.create(diver, function(err, diver) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not create diver. Stack trace: ' + err });
        } else {
            res.json(diver);
        }
    });
});

router.get('/buddies', function(req, res) {
    var diverID = req.query.diverID;

    if (req.query.name) {
        Diver.findOne({ _id: req.query.diverID }).exec(function(err, diver) {
            if (err) {
                console.log(err);
                res.status(500).json({ 'Error': 'Could not get divers. Stack trace: ' + err });
            } else {
                Diver.find({ 'name' : new RegExp(req.query.name, 'i'), _id: { '$nin': diver.buddies, '$ne': diverID } } ).limit(10).sort({ name: 1 }).exec(function(err, divers) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ 'Error': 'Could not get divers. Stack trace: ' + err });
                    } else {
                        res.json(divers);
                    }
                });
            }
        });
    } else {
        Diver.findOne({ _id: req.query.diverID }).exec(function(err, diver) {
            if (err) {
                console.log(err);
                res.status(500).json({ 'Error': 'Could not get divers. Stack trace: ' + err });
            } else {

                Diver.find({ _id: { '$in': diver.buddies } }).exec(function(err, buddies) {
                    if (err) {
                        res.status(500).json({ 'Error': 'Could not get buddies. Stack trace: ' + err });
                    } else {
                        res.json(buddies)
                    }
                });
            }
        });
    }
});

router.post('/buddies/add', function(req, res) {
    Diver.update({ _id: req.query.diverID}, { $push: { 'buddies' : req.query.buddyID } }, function(err, diver) {
            if (err) {
                res.status(500).json({ 'Error': 'Could not get buddies. Stack trace: ' + err });
            } else {
                res.status(200).json({ 'Message': 'Buddy removed.' });
            }
    });
});

router.post('/buddies/remove', function(req, res) {
    Diver.update({ _id: req.query.diverID}, { $pull: { 'buddies' : req.query.buddyID } }, function(err, diver) {
            if (err) {
                res.status(500).json({ 'Error': 'Could not get buddies. Stack trace: ' + err });
            } else {
                res.status(200).json({ 'Message': 'Buddy removed.' });
            }
    });
});

module.exports = router;
