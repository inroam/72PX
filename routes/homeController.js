var Home = require("../models/HomeModel.js"); // 引用搭配模型

var cssGroup = [
  "/css/home.css"
];
var jsGroup = [
  "/js/home.js"
];
var homeController = function(router){
  /* GET home page. */
  router.get('/', function(req, res, next) {
    var max = 3;
    var bgIndex = Math.ceil(Math.random()*max); //获取随机图片
    res.render('index', {
      title : '72PX',
      action : 'index',
      homes : 'homes',
      bg :  bgIndex,
      cssGroup : cssGroup,
      jsGroup : jsGroup
    });
  });
}

module.exports = homeController;
