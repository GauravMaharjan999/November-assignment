const { checkSchema } = require("express-validator");
const mongoose = require('mongoose');
// const Songs = mongoose.model("Songs");
// const Categories = mongoose.model("Categories");


const SongsValidator = checkSchema({
    name: {
        trim: true,
        isLength: {
            options: { min: 1, max: 255 },
            errorMessage: "Name of the song is required",
        },
    },
    // category: {
    //     trim: true,
    //     isLength: {
    //         options: { min: 1, max: 255 },
    //         errorMessage: "category of the song is required",
    //     },
    //     custom: {
    //         options: async(req, res) => {
    //             const cate = await Categories.findOne({ name: req.body.category });
    //             if (!cate) {
    //                 return res.status(401).json({ error: "Category not found" })
    //             }


    //         }
    //     },
    // }

});

module.exports = SongsValidator;