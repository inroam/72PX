var express = require('express'),
    ypcjs = require("../models/ypcjData.json");
    sys = require("../models/syData.json");
    router = express.Router(),


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 场景应用*/
router.get('/ypcj', function(req, res, next) {
    //查询约拍场景
    res.render('ypcj', {
        title: '72PX约拍场景',
        action : 'ypcj',
        ypcjs : ypcjs
    });
});

/* 摄影应用*/
router.get('/sy', function(req, res, next) {
    //查询约拍场景
    res.render('sy', {
        title: '72PX摄影',
        action : 'sy',
        sys : sys
    });
});

module.exports = router;
