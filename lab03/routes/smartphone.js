var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    
    var brand = req.query.brand;
    var model = req.query.model;
    var version = req.query.version;
    
    if(brand==undefined){
        res.sendfile("./public/html/smartphone_list.html");
    }else{
        var data = "Brand : "+brand+"<br/>Model : "+model+"<br/>Version : "+version;
        res.send(data);
    }
    
});

router.get("/:brand/:model/:version",function(request,response){
    var brand = request.params.brand;
    var model = request.params.model;
    var version = request.params.version;
    var data = setData(brand,model,version);
    response.send(data);
});

router.get("/*",function(request,respone){
    respone.send("Paramater no match");
});

function setData(brand,model,version){
    return "Brand : "+brand+"<br/>Model : "+model+"<br/>Version : "+version;
}

module.exports = router;