var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //var demo = require('../library/demo.js');
    res.send("Cal : "+demo.calculated(10,20));
});

module.exports = router;
