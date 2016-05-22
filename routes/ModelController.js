var Home = require("../models/HomeModel.js"); // 引用搭配模型

var homeController = function(router){
  /* 模特应用*/
  router.get('/model', function(req, res, next) {
    //查询约拍场景
    res.render('model', {
      title: '72PX模特',
      action : 'model',
      models : models
    });
  });
}

module.exports = homeController;
