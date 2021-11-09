const { check, validationResult } = require('express-validator')


const catchValidationError = (fn) => {
    return function(req, res, next) {
        const error = validationResult(req);
        if (error.isEmpty()) {
            return fn(req, res, next).catch(next);
        } else {
            const errorData = error.mapped();
            return res.status(422).json(errorData);
        }
    }

}

module.exports = catchValidationError;