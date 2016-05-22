var Home = require("../models/HomeModel.js"); // 引用搭配模型

var homeController = function(router){
  /* 摄影应用*/
  router.get('/sy', function(req, res, next) {
    //查询约拍场景
    res.render('sy', {
      title: '72PX摄影',
      action : 'sy',
      sys : sys
    });
  });
}

module.exports = homeController;
