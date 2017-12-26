var ZaloSocial = require('zalo-sdk').ZaloSocial;
var ha = "7527184424076269072";
var na = "4355607641836422423";
var code = 'uZI-NPkVFsRXERzIafy-RUipl5MLWZWmbt7LMuoqKcMNI98ug-zBRueOhrQCm6aFyM_kSVwO74NgGz0QpB8rPEvuy3t_lp1zrXdAGExo4ZIJ7EG9kle3HjmVsYBOoojXwMF82k252dIJVEqMjBCrShuUnpInn4HffI603Th7Sc7Z7gS4mEX-IiG7_NVwwICTzmxK8kNU0dhe2l96nSrq5Bmyjag5zL0AWH22Vv3hJ2YX5izlZUyM8O0XzbYFyd8me3sZLzBfBZZ37writS4l4JHrIv-q3Pg5EM0';

var zsConfig = {
    appId: '3024561949895223655',
    redirectUri: 'https://developers.zalo.me/',
    secretkey: 'JFUUR3HX3nknV27KIBEc'
};
var ZSClient = new ZaloSocial(zsConfig);

ZSClient.setAccessToken(code);

function sendMessage(message) {
    ZSClient.api('me/message', 'POST', { to: '7527184424076269072', message: message }, function (response) {
        console.log(response);
    });
}

// ZSClient.api('me', 'GET', { fields: 'id, name, birthday, gender, picture' }, function(response) {
//     console.log(response);
// });

module.exports = {
    sendMessage: sendMessage
}