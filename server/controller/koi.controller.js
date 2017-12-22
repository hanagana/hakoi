var Koi = require('./../models/koi.model');

module.exports = {
    getAllKoi: getAllKoi,
    getKoi: getKoi,
    createKoi: createKoi,
    updateKoi: updateKoi,
    deleteKoi: deleteKoi
}

function getAllKoi(q) {
    var query = {};
    query.isOpen = q.open == 1 ? 1 : 0;
    console.log(query);
    
    return new Promise((resolve, reject) => {
        Koi.find(query).exec(function (err, kois) {
            if (err) {
                reject(err);
            } else {
                resolve(kois);
            }
        });
    });
}

function getKoi(request) {
    return new Promise((resolve, reject) => {
        Koi.findOne({
            _id: request.id
        }).exec(function (err, koiModel) {
            if (err) {
                reject(err);
            } else {
                if (!koiModel) {
                    reject({
                        statusCode: 404,
                        message: "Not Found"
                    });
                } else {
                    resolve(koiModel);
                }
            }
        });
    });
}

function createKoi(request) {
    return new Promise((resolve, reject) => {
        var newKoi = new Koi({
            symbol: request.symbol,
            quantity: request.quantity,
            name: request.symbol,
            priceBuy: request.symbol,
            priceSold: request.priceSold,
            currentOrderPrice: request.currentOrderPrice,
            boughtDate: new Date(),
            soldDate: null,
            type: request.type,
            isOpen: 1,
            isDelete: 0
        });

        newKoi.save(function (err, response) {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}

function updateKoi(request) {
    return new Promise((resolve, reject) => {
        Koi.findOne({
            _id: request.id
        }).exec(function (err, koiModel) {
            if (err) {
                reject(err);
            } else {
                if (!koiModel) {
                    reject({
                        statusCode: 404,
                        message: "Not Found"
                    });
                } else {
                    koiModel.save(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    });
                }
            }
        });
    });
}

function deleteKoi(request) {
    return new Promise((resolve, reject) => {
        Koi.findOne({
            _id: request.id
        }).exec(function (err, koiModel) {
            if (err) {
                reject(err);
            } else {
                if (!koiModel) {
                    reject({
                        statusCode: 404,
                        message: "Not Found"
                    });
                } else {
                    Koi.remove({
                        _id: request.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                message: "Deleted"
                            });
                        }
                    });
                }
            }
        });
    });
}