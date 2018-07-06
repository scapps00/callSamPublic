//requirements
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//initialize app
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));

require("./routes/routes.js")(app);

//listen
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});