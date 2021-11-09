const { checkSchema } = require("express-validator");

const loginValidator = checkSchema({
    email: {
        isLength: {
            options: { min: 1, max: 255 },
            errorMessage: "Email is required",
        },
        isEmail: {
            errorMessage: "Invalid email",
        },
        trim: true,

    },
    password: {
        trim: true,
        isLength: {
            options: { min: 6, max: 100 },
            errorMessage: "Password is required and must be of minimum length of 6 characters.",
        },
    },
});

module.exports = loginValidator;