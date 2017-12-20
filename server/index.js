const express = require('express');
const PORT = process.env.PORT || 5000;

var db = require('./db');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config');
var errorHandler = require('./middlewares/error-handler');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

    next();
};

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(allowCrossDomain);

app.use(config.BASE_API_URL + '/koi', require('./routes/koi.route')());

app.use(errorHandler.errorHandler());

app.listen(PORT);

console.log("Server is listening on port " + PORT)