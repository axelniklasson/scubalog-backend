var mongoose = require('mongoose');

var DiverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    facebookID: { type: Number, required: true },
    organisation: { type: String, required: true },
    certification: { type: String, required: true }
});

module.exports = mongoose.model('Diver', DiverSchema);
