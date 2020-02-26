const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req,res){
    res.redirect('/index.html')
})


app.listen(3004, function (){
    console.log("listening on server 3004")
})