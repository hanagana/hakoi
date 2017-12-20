var mongoose = require('mongoose');
var config = require('./../config');

var Schema = mongoose.Schema;

var koiSchema = new Schema({
    name: {
        type: String
    },
    symbol: {
        type: String
    },
    quantity: {
        type: Number
    },
    priceBuy: {
        type: Number
    },
    priceSold: {
        type: Number
    },
    currentOrderPrice: {
        type: Number
    },
    boughtDate: {
        type: Date
    },
    soldDate: {
        type: Date
    },
    type: {
        type: Number//buy or sell
    },
    isOpen: {
        type: Boolean
    },
    isDelete: {
        type: Boolean
    }
});

var Koi = mongoose.model('koi', koiSchema);

module.exports = Koi;