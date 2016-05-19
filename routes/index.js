var express = require('express'),
    homes = require("../models/homeData.json");
    ypcjs = require("../models/ypcjData.json");
    sys = require("../models/syData.json");
    models = require("../models/modelData.json");
    dresss = require("../models/dressData.json");
    prinks = require("../models/prinkData.json");
    router = express.Router(),

/* GET home page. */
router.get('/', function(req, res, next) {
    var max = 3;
    var bgIndex = Math.ceil(Math.random()*max); //获取随机图片
  res.render('index', {
      title : '72PX',
      action : 'index',
      homes : 'homes',
      bg :  bgIndex
  });
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

/* 模特应用*/
router.get('/model', function(req, res, next) {
    //查询约拍场景
    res.render('model', {
        title: '72PX模特',
        action : 'model',
        models : models
    });
});

/* 搭配应用*/
router.get('/dress', function(req, res, next) {
    //查询约拍场景
    res.render('dress', {
        title: '72PX搭配',
        action : 'dress',
        dresss : dresss
    });
});

/* 化妆应用*/
router.get('/prink', function(req, res, next) {
    //查询约拍场景
    res.render('prink', {
        title: '72PX化妆',
        action : 'prink',
        prinks : prinks
    });
});

module.exports = router;
