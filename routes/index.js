var homeController = require('./HomeController.js'), //引用首页路由
    userController = require('./UsersController.js'), //引用通行证路由
    collocationsController = require('./CollocationsController.js'); //引用搭配路由

// 实现路由的模块分离
var controller = function(app){
    homeController(app);
    userController(app);
    collocationsController(app);
}


module.exports = controller;
