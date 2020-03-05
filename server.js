const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/public"));

app.get('/', function(res, req) {
    res.redirect('/public/index.html')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("My Server is listening on port 3001!");
});