const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const songsSchema = new Schema({
    name: {
        type: String
    },

    category: {
        type: String
    },

    creatorId: {
        type: String
    }

});


module.exports = mongoose.model("Songs", songsSchema);