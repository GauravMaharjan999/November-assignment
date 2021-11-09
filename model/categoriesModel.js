const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const categoriesSchema = new Schema({
    name: {
        type: String
    }

});


module.exports = mongoose.model("Categories", categoriesSchema);