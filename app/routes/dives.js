var express = require('express');
var router = express.Router();
var Dive = require('../models/dive');

router.get('/', function(req, res) {
    req.query.skip ? skip = parseInt(req.query.skip) : skip = 0;
    req.query.take ? take = parseInt(req.query.take) : take = 0;

    Dive.find({}).populate('diver').skip(skip).limit(take).sort({ date: 1 }).exec(function(err, dives) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not get dives. Stack trace: ' + err });
        } else {
            res.json(dives);
        }
    });
});

router.post('/', function(req, res) {
    var model = req.body;
    model.diver = "596b7a88667e3e65497ed070";

    Dive.create(model, function(err, dive) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not create dive. Stack trace: ' + err });
        } else {
            console.log(dive);
            res.json(dive);
        }
    });
});

router.put('/:id', function(req, res) {
    var ID = req.params.id;
    var model = req.body;
    model.diver = "596b7a88667e3e65497ed070";
    model.date = new Date(model.date);
    // console.log(model);

    Dive.update({ _id: ID }, model, function(err, dive) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not update dive. Stack trace: ' + err });
        } else {
            res.json(dive);
        }
    });
});

router.delete('/:id', function(req, res) {
    var ID = req.params.id;

    Dive.findOne({_id: ID}).remove(function(err) {
        if (err) {
            res.status(500).json({ 'Error': 'Could not delete dive. Stack trace: ' + err });
        } else {
            res.status(200).json({ 'Message': 'Dive deleted.' });
        }
    });
});

module.exports = router;
