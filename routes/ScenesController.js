var Home = require("../models/HomeModel.js"); // 引用搭配模型

var homeController = function(router){
  /* 场景应用*/
  router.get('/scenes', function(req, res, next) {
    //查询约拍场景
    res.render('scenes', {
      title: '72PX场景',
      action : 'scenes',
      scenes : scenes
    });
  });
}

module.exports = homeController;
