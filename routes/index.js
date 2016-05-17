var express = require('express'),
    ypcjs = require("../models/ypcjData.json");
    router = express.Router(),


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 72PX场景应用*/
router.get('/ypcj', function(req, res, next) {
    //查询约拍场景
    res.render('ypcj', {
        title: '72PX约拍场景',
        ypcjs : ypcjs
    });
});

module.exports = router;
