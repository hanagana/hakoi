var router = require('express').Router();
var koiController = require('./../controller/koi.controller');
var config = require('./../config');

module.exports = function () {
    router.get('/', getAllKoi);
    router.get('/:id', getKoi);
    router.post('/', createKoi);
    router.put('/:id', updateKoi);
    router.delete('/:id', deleteKoi);

    return router;
};

function getAllKoi(req, res, next) {
    koiController.getAllKoi(req.query).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function getKoi(req, res, next){
    var request = {
        id: req.params.id
    };

    koiController.getKoi(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function createKoi(req, res, next) {
    console.log("route")
    koiController.createKoi(req.body).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function updateKoi(req, res, next) {
    var request = req.body;
    request.id = req.params.id;


    koiController.updateKoi(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}

function deleteKoi(req, res, next) {
    var request = {
        id: req.params.id
    };

    koiController.deleteKoi(request).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        next(err);
    });
}