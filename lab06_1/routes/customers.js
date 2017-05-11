var express = require('express');
var router = express.Router();


router.get('/',function(request,response){
    var sql = "SELECT * FROM customer";
    query(sql,function(data){
        console.log(data);
        response.send("OK");
    });
});

function query(sql,callback){
    var mssql = require('mssql');
    var config = {
        user : "nodejs",
        password:"055090323",
        port: "1521",
        server:"localhost",
        database :"nodejs",
        options: {
            encrypt: true
        }
    }

    mssql.connect(config,function(err_connect)
    {
        var cmd = new mssql.Request();
        cmd.query(sql,function(err_query,data){
            console.log('Error is : ' + err_query);
            console.log('From CMD : ' + data);
            callback(data);
        });
    });
}

module.exports = router;