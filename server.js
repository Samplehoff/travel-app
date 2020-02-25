const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.static(__dirname + '/public'));






app.listen(process.env.PORT, function () {
    console.log('server listening on port ' + process.env.PORT + ' app name= ' + process.env.PROJECT_NAME);
  })