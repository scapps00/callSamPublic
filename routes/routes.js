var path = require("path");
var client = require("./../bandwidthInit.js");
var bodyParser = require("body-parser");

var sentMain = "Listen carefully to the following options. Press 1 to hear about Samantha's education. Press 2 to hear about Samantha's work history. Press 3 to hear about the technologies she uses. Press 4 to hear about her hobbies. Press 5 to be transfered to Samantha's personal phone number. Press star to repeat these options.";

var sentEd = "Samantha has a bachelors degree with a double major in mathematics and creative writing from Warren Wilson College, a small work college in Asheville, North Carolina. She also took graduate-level information science courses for a year at McGill University in Montreal, Quebec, Canada. More recently, in 2017, she completed the six-month intensive Coding Bootcamp and UNC Chapel Hill. There she learned a variety of front end and back end web technologies. ";

var sentWork = "After college, Samantha worked for two years from 2012 to 2014 for the public library of Charlotte, North Carolina. There she developed and excelled in customer service skills. Since moving back to North Carolina, she has been serving as President of J L Capps Investments, a timber investment company that owns land near Durham, North Carolina. Since completely the UNC Coding Bootcamp in 2017, Samantha has worked for herself as a full stack web and app developer. She currently also works as a sales associate and social media guru at Dancing Moon Books and Gifts in Raleigh, North Carolina. ";

var sentTech = "The technologies Samantha uses include HTML, CSS, Sass, JavaScript, J Query, Bootstrap, Handlebars, restful APIs, ajax, node JS, My SQL, mongo DB, React, Git, GitHub, and Apache Cordova. ";

var sentHob = "Samantha enjoys reading both fiction and nonfiction and owns over 1000 books. She also likes to play video games, knit, and travel. Places she has traveled to include France, Iceland, and Japan. ";

module.exports = function(app) {

    app.post("/callback", function(req, res) {
        var optionsInc = {
            sentence : "Welcome to the Samantha Capps hotline. I am here to tell you more about Samantha and her qualifications. " + sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",
        }
    
        var optionsEd = {
            sentence : sentEd + sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",
        }

        var optionsWork = {
            sentence : sentWork + sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",  
        }

        var optionsTech = {
            sentence : sentTech + sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",  
        }

        var optionsHob = {
            sentence : sentHob + sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",  
        }

        var optionsRep = {
            sentence : sentMain,
            gender   : "female",
            locale   : "en_US",
            voice    : "Susan",  
        }

        if (req.body.eventType == "incomingcall") {
            client.Call.playAudioAdvanced(req.body.callId, optionsInc).then(function(res) {
                res.send();
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == 1) {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                client.Call.playAudioAdvanced(req.body.callId, optionsEd).then(function(res) {
                    res.send();
                });
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == 2) {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                client.Call.playAudioAdvanced(req.body.callId, optionsWork).then(function(res) {
                    res.send();
                });
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == 3) {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                client.Call.playAudioAdvanced(req.body.callId, optionsTech).then(function(res) {
                    res.send();
                });
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == 4) {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                client.Call.playAudioAdvanced(req.body.callId, optionsHob).then(function(res) {
                    res.send();
                });
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == "*") {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                client.Call.playAudioAdvanced(req.body.callId, optionsRep).then(function(res) {
                    res.send();
                });
            });
        } if (req.body.eventType == "dtmf" && req.body.dtmfDigit == 5) {
            client.Call.stopSpeaking(req.body.callId).then(function (res) {
                var transferPayload = {
                    transferTo : "+19809259615",
                };

                client.Call.transfer(req.body.callId, transferPayload).then(function (res) {
                    res.send();
                });
            });
        } else {
            res.send();
        }
    });

}