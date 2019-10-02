const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spots"
    }
});

const model = mongoose.model('Booking', BookingSchema);

module.exports = model;