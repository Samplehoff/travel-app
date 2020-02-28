const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"));

app.listen(3001, function() {
    console.log("My Server is listening on port 3001!");
});