const { checkSchema } = require("express-validator");

const songsValidator = checkSchema({

    name: {
        trim: true,
        isLength: {
            options: { min: 3, max: 100 },
            errorMessage: "name is required and must be of minimum length of 6 characters.",
        },
    },
});

module.exports = songsValidator;