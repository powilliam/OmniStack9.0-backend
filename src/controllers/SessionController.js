const UserSchema = require('../models/UserSchema');

// index, store, show, update, destroy

module.exports = {
    store: async (req, res) => {
        const { email } = req.body;
        !email && res.json({ error: "No email provided to join in a session" });

        let user = await UserSchema.findOne({ email });
        if (!user) {
            user = await UserSchema.create({ email });
        }
        return res.json({ user });
    }
}