var express = require('express'),
    homes = require("../models/homeData.json");
    scenes = require("../models/scenesData.json");
    sys = require("../models/syData.json");
    models = require("../models/modelData.json");
    Collocations = require("../models/collocations.js"); // 引用搭配模型
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
router.get('/scenes', function(req, res, next) {
    //查询约拍场景
    res.render('scenes', {
        title: '72PX场景',
        action : 'scenes',
        scenes : scenes
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
router.get('/collocations', function(req, res, next) {

    var collocations = null;
    Collocations.find(function(err,collocations){
        //查询约拍场景
        res.render('collocations', {
            title: '72PX搭配',
            action : 'collocations',
            collocations : collocations
        });
    });
    console.log(collocations);

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
