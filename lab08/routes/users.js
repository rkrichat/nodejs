var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var data = {
    title:"Hello from User Route.",
    username:"rkritchat",
    datalist:[
      {id:1,name:"A"},
      {id:2,name:"B"}
    ]
  };
  res.render('user',data);
});

module.exports = router;
