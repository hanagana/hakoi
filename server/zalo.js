var ZaloSocial = require('zalo-sdk').ZaloSocial;
var ha = "7024743894065766160";
var na = "4355607641836422423";
var codeHa = 'me8AJ8nOeNd1ZWXBYbMbUC6C14Q4JUXtizeJ69zHn2-BqnjPfaQkC9xJPcIs2CicdA9cH9fqaoEbtNvEdcAtVOwrQHJ1C84Z-QvJJSqNZMRpooKIssZH8Upt9aBvLVKtiuqdGPKts2Ingn1p_06nDj6-R0Vz1unDmgrW3lKqitpBX6Kpq5-uLDNSOHlvVBKboDORJ81rwIkEm1bijdRJMfFoScggNuTTj80cCx8uyb28i2GoXXVVV9UF7qAWByaFX9KSGAXDyN2jwX0lfsIzH7plc0QDGwP_';
var codeNa = 'mCzCDvod5KR3maqubQSKJSd8JZ-IkdO1b8Hs0C-VVJN4YNG8u_X-2DVd87oAq2WMikW24fk39m33w3Wzn8OaIlwo83Ideo16bfSAJu2P7rUMZ41Ho80UVFIeBMlpe2SSy8qcCCoM7K75lq1axhPSTiQm06V5sJfQXjTxQwJvI6Mlb4XAXuGHNuxfBM2ZxpbIZzyVORZ08NBZ-XXVkCqzT9N2F7JAypPzqU4eSikC3b7ie5PHviqBHilR95ATuGDGo_yCMi3oANgPtXDeXkSTJKTkN6n7dRqJG0';

var zsConfigNa = {
    appId: '3024561949895223655',
    redirectUri: 'https://developers.zalo.me/',
    secretkey: 'JFUUR3HX3nknV27KIBEc'
};

var zsConfigHa = {
    appId: '4525331914745576989',
    redirectUri: 'https://developers.zalo.me/',
    secretkey: 'XwJGh3nIA1qZJrWR6KMM'
};
var ZSClient = new ZaloSocial(zsConfigNa);

ZSClient.setAccessToken(codeNa);

function sendMessage(message) {
    ZSClient.api('me/message', 'POST', { to: '7024743894065766160', message: message, link: 'https://developers.zalo.me/' }, function (response) {
        console.log(response);
    });
}

sendMessage("hihi")

// ZSClient.api('me', 'GET', { fields: 'id, name, birthday, gender, picture' }, function(response) {
//     console.log(response);
// });

module.exports = {
    sendMessage: sendMessage
}