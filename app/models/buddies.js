var mongoose = require('mongoose');

var BuddiesSchema = new mongoose.Schema({
    buddyOne: { type: mongoose.Schema.ObjectId, ref: 'Diver', required: true },
    buddyOne: { type: mongoose.Schema.ObjectId, ref: 'Diver', required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Buddies', BuddiesSchema);
