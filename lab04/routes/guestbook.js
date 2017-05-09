var express = require('express');
var router = express.Router();
var fs = require("fs");
var file_name = "./public/guestbook.txt";

router.get("/",function(request,response){

    //response.send("Welcome to guestbook.");
    var option ={
        encoding :"utf-8",
        flag:"r"
    };
    fs.readFile(file_name,option,function(error,data){
        response.send(data);
    });
    
});

router.get("/new" , function(request,response){
    response.sendfile("./public/html/form_guestbook.html");
});

router.post("/new",function(request,response){
    var name = request.body.txt_name;
    var content = request.body.txt_content;
    
    var data = "Name : "+name+"<br/>Contenct : " + content+"<br/>";
    
    
    fs.appendFile(file_name,data,function(err){
       //response.redirect("/guestbook"); 
    });
    
    response.send(data);
})


module.exports = router;