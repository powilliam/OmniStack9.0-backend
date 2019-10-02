const SpotsSchema = require('../models/SpotsSchema');

module.exports = {
    store: async (req, res) => {
        return res.json({ ok: true });
    }
}