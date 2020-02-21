const app = require("express");


app.listen(process.env.PORT, function () {
    console.log('server listening on port ' + process.env.PORT + ' app name= ' + process.env.PROJECT_NAME);
  })