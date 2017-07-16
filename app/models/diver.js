var mongoose = require('mongoose');

var DiverSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Diver', DiverSchema);
