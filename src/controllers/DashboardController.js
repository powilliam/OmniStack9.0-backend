const SpotsSchema = require('../models/SpotsSchema');

module.exports = {
    show: async (req, res) => {
        const { user_id } = req.headers;

        const spots = await SpotsSchema.find({ user: user_id });

        return res.json(spots);
    }
}