var config = require('./../config').mongodb;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true
});