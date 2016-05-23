var Scenes = require("../models/ScenesModel.js"); // 引用搭配模型

var ScenesController = function(router){
  /* 场景应用*/
  router.get('/scenes', function(req, res, next) {
    //查询约拍场景
    var scenes = new  Scenes();
    scenes.getAll(function(err, scene){
      res.render('scenes', {
        title: '72PX模特',
        action : 'scenes',
        scenes : scene
      });
    });
  });
}

module.exports = ScenesController;
