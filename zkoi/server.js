var request = require('request');
var zalo = require('./zalo');

const http = require('http');
const port = 3000;
const server = http.createServer();


server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)


    var orders = {
        "YOYOETH": 0.00053000,
        "VIBETH": 0.00085000,
        "POWRETH": 0.00156000
    }

    var oldRate = {
        "YOYOETH": -100,
        "VIBETH": -100,
        "POWRETH": -100
    }

    //start
    getPrice(start);

    function start() {
        setTimeout(function () {
            getPrice(start);
        }, 5000);
    }

    function getPrice(callback) {
        request('https://api.binance.com/api/v1/ticker/allPrices', function (error, response, body) {
            var list = sanitize(body);
            var calculated = calculate(list);
            // console.log(calculated);

            //callback
            if (callback) {
                callback();
            }
        });
    }

    function sanitize(list) {
        var list = JSON.parse(list);
        var result = {};
        for (i = 0; i < list.length; i++) {
            result[list[i].symbol] = parseFloat(list[i].price).toFixed(8);
        }
        return result;
    }

    function calculate(listPrice) {
        var result = '';
        for (p in orders) {
            var name = p;
            var buyAt = orders[p];
            var currentPrice = listPrice[p];
            var rate = ((listPrice[p] - orders[p]) * 100 / orders[p]).toFixed(2);

            var newText = name + ' - At: ' + buyAt + ' | Current: ' + currentPrice + ' | Rate: ' + rate + '\n';
            if ((rate >= -5 && rate < 0) || (rate < 5 && rate >= 0)) {
                if ((rate > oldRate[name]) || (rate < oldRate[name] && oldRate[name] > 0) ) {
                    zalo.sendMessage(newText);
                }
                oldRate[name] = rate;
            }
            result = result + newText;
        }
        return result;
    }
})





