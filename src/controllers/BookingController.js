const BookingSchema = require('../models/BookingSchema');

module.exports = {
    store: async (req, res) => {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await BookingSchema.create({
            date,
            user: user_id,
            spot: spot_id,
        });

        await booking.populate('user').populate('spot').execPopulate();

        return res.json(booking);
    }
}