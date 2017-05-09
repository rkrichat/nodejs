var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname,'views'));

app.set('view engine','jade');

function getHompage(req,res){
    res.render('index.jade');
}

app.get('/',getHompage);

var server = app.listen(5555,function(){
    console.log('Express.js is running...');
});