var mongoose = require('mongoose');

var DiveSchema = new mongoose.Schema({
    count: { type: Number, default: 1 },
    date: { type: Date },
    diver: { type: mongoose.Schema.ObjectId, ref: 'Diver', required: true },
    buddy: { type: mongoose.Schema.ObjectId, ref: 'Diver' },
    maxDepth: { type: Number, default: 0, required: true },
    avgDepth: { type: Number, default: 0 },
    temperature: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    minutes: { type: Number, default: 0, required: true },
    site: { type: String, required: true },
    notes: { type: String },
    startBar: { type: Number },
    endBar: { type: Number }
});

module.exports = mongoose.model('Dive', DiveSchema);
