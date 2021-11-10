const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
    const bearerToken = req.headers.authorization;
    let token = bearerToken.split(' ');
    if (token.length != 2) {
        res.status(403).json({
            error: " Authorization token must be provided   "
        });

    }

    try {
        let decodedToken = jwt.verify(token[1], process.env.SECRET_KEY);
        const user = await User.findById(decodedToken.id)
        req.user = user;
        next();
    } catch (e) {
        return res.status(401).json({ error: "Invalid Token" })
    }

}

module.exports = verifyToken;