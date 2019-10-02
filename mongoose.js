const mongoose = require('mongoose');

module.exports = {
    connectToMongoServer: (DB_URL) => {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, err => err && console.dir(err, { depth: null }));
    }
}