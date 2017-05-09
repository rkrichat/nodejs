var express = require('express');
var router = express.Router();
var fs = require('fs');
var multiparty = require('multiparty');
var form = new multiparty.Form();

router.get('/root',function(request,response){
    response.send('TEST');
});


router.get('/upload',function(request,response){
    response.sendfile("./public/html/images-upload.html");
});

router.post('/upload',function(request,response){
    form.parse(request,function(error,fields,files){
        console.log(files);
        var img = files.images[0];
        var path = "./public/images/"+img.originalFilename;
        fs.readFile(img.path,function(error,data){
            console.log(data);
            fs.writeFile(path,data,function(error){
                if(error) console.log(error);
                response.send('upload success.');
            });            
        });
        
        
    });
});

module.exports = router;