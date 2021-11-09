require('dotenv').config()
require('./config/database.js')
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const route = require('./routes')
const logMiddleware = require('./middleware/logger.js')


app.use(logMiddleware);
app.use(bodyParser.json());

app.use((req, res, next) => {
    // console.log("This is middleware body:", req.body);

    next();
})

app.use('/', route)









const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running in the port ${port}`);
})