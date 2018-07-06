var client = require("./bandwidthInit.js");

var options = {
    sentence : "hola de Bandwidth",
    gender   : "male",
    locale   : "es",
    voice    : "Jorge"
}
//Promise
client.Call.playAudioAdvanced("callId", options).then(function (res) {});
