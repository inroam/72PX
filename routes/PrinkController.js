var Home = require("../models/HomeModel.js"); // 引用搭配模型

var homeController = function(router){
  /* 化妆应用*/
  router.get('/prink', function(req, res, next) {
    //查询约拍场景
    res.render('prink', {
      title: '72PX化妆',
      action : 'prink',
      prinks : prinks
    });
  });
}

module.exports = homeController;
