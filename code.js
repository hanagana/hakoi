$(document).ready(function() {
    console.log(getPrice());

    function getPrice() {
        return window.price;

        // $.ajax({
        //     url: "https://api.binance.com/api/v1/ticker/allPrices",
        //     method: "GET"
        // }).done(function(data, a, b) {
        //     console.log(data);
        //     console.log(a);
        //     console.log(b);
        // })
    }
});