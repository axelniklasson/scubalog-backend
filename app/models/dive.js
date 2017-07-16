var mongoose = require('mongoose');

var DiveSchema = new mongoose.Schema({
    date: { type: Date },
    diver: { type: mongoose.Schema.ObjectId, ref: 'Diver', required: true },
    maxDepth: { type: Number, default: 0, required: true },
    avgDepth: { type: Number, default: 0 },
    temperature: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    minutes: { type: Number, default: 0, required: true },
    site: { type: String, required: true },
    notes: { type: String }
});

module.exports = mongoose.model('Dive', DiveSchema);
