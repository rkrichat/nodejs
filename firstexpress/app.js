var express = require('express');
var app = express();

function getHomPage(req,res){
    res.send('<h1>This is homepage.</h1>');
}

function getAboutPage(req,res){
    res.send('<h1>This is abot page.</h1>');
}

app.get('/',getHomPage);

app.get('/about',getAboutPage);

//start server with port 555
var server = app.listen(555,function(){
    console.log('Express is rening on port 555');
});