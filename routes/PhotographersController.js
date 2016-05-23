var Photographers = require("../models/PhotographersModel.js"); // 引用摄影师模型

var PhotographersController = function(router){
  /* 摄影应用*/
  router.get('/photographers', function(req, res, next) {
    var photographers = new  Photographers();
    photographers.getAll(function(err, photographer){
      res.render('photographers', {
        title: '72PX摄影',
        action : 'photographers',
        photographers : photographer
      });
    });
  });
}

module.exports = PhotographersController;
