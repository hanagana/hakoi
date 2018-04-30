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
console.reset = function () {
  return process.stdout.write('\033c');
}

    var orders = {
        "YOYOETH": 0.00053000,
        "VIBETH": 0.00085000,
        "POWRETH": 0.00156000,
        "XRPETH": 0.00262000,
        "TRXETH": 0.00004673
    }

    var oldRate = {
        "YOYOETH": -100,
        "VIBETH": -100,
        "POWRETH": -100,
        "XRPETH": -100,
        "TRXETH": -100
    }

    //start
    getPrice(start);

    function start() {
        setTimeout(function () {
            getPrice(start);
        }, 10000);
    }

    function getPrice(callback) {
	console.reset();
        request('https://api.binance.com/api/v1/ticker/allPrices', function (error, response, body) {
            var list = sanitize(body);
            var calculated = calculate(list);
            console.log(calculated);

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

            var newText = name + ' - At: ' + buyAt + ' | Current: ' + currentPrice + ' | Rate: ' + rate;

            if(name == 'POWRETH') {
                var totalRate = ((currentPrice - buyAt) * 23 * 100 / 0.74).toFixed(2);
                newText = newText + ' | TotalRate: ' + totalRate;
            }

            if(name == 'VIBETH') {
                var totalRate = ((currentPrice - buyAt) * 100 * 100 / 0.74).toFixed(2);
                newText = newText + ' | TotalRate: ' + totalRate;
            }

            if(name == 'YOYOETH') {
                var totalRate = ((currentPrice - buyAt) * 120 * 100 / 0.74).toFixed(2);
                newText = newText + ' | TotalRate: ' + totalRate;
            }

            if(name == 'XRPETH') {
                var totalRate = ((currentPrice - buyAt) * 200 * 100 / 0.74).toFixed(2);
                newText = newText + ' | TotalRate: ' + totalRate;
            }

            if(name == 'TRXETH') {
                var totalRate = ((currentPrice - buyAt) * 3000 * 100 / 0.74).toFixed(2);
                newText = newText + ' | TotalRate: ' + totalRate;
            }

            newText = newText + '\n';

            // if ((rate >= -5 && rate < 0) || (rate < 5 && rate >= 0)) {
            //     if ((rate > oldRate[name]) || (rate < oldRate[name] && oldRate[name] > 0) ) {
            //         zalo.sendMessage(newText);
            //     }
            //     oldRate[name] = rate;
            // }
            result = result + newText;
        }
        return result;
    }
})





