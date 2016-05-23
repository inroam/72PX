var Models = require("../models/ModelsModel.js"); // 引用模特模型

var ModelsController = function(router){
  /* 模特应用*/
  router.get('/models', function(req, res, next) {
    var models = new  Models();
    models.getAll(function(err, model){
      res.render('models', {
        title: '72PX模特',
        action : 'models',
        models : model
      });
    });
  });
}

module.exports = ModelsController;
