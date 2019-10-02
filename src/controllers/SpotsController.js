const UserSchema = require('../models/UserSchema');
const SpotsSchema = require('../models/SpotsSchema');

module.exports = {
    index: async (req, res) => {
        const { tech } = req.query;

        const spots = await SpotsSchema.find({ techs: tech });

        return res.json(spots);
    },

    store: async (req, res) => {
        const { company, price, techs } = req.body;
        const { originalname } = req.file;
        const { user_id } = req.headers;

        const findUser = await UserSchema.findById(user_id);

        !findUser && res.status(401).json({ error: "User does not exist" });

        const store = await SpotsSchema.create({
            thumbnail: originalname,
            company,
            price,
            techs: techs.split(',').map(techs => techs.trim()),
            user: user_id
        });

        return res.json(store);
    }
}