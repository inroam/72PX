var Prinks = require("../models/PrinksModel.js"); // 引用搭配模型

var PrinksController = function(router){
  /* 化妆应用*/
  router.get('/prinks', function(req, res, next) {
    var prinks = new  Prinks();
    prinks.getAll(function(err, prink){
      res.render('prinks', {
        title: '72PX化妆',
        action : 'prinks',
        prinks : prink
      });
    });
  });
}

module.exports = PrinksController;

