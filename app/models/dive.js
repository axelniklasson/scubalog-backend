var mongoose = require('mongoose');

var DiveSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    diver: { type: mongoose.Schema.ObjectId, ref: 'Diver', required: true },
    maxDepth: { type: Number, default: 0, required: true },
    avgDepth: { type: Number, default: 0 },
    minutes: { type: Number, default: 0, required: true },
    location: { type: String, required: true },
    comments: { type: String }
});

module.exports = mongoose.model('Dive', DiveSchema);
