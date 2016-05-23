var homeController = require('./HomeController'), //引用首页路由
    userController = require('./UsersController'), //引用通行证路由
    collocationsController = require('./CollocationsController'), //引用搭配路由
    messageController = require('./MessageController'), //引用搭配路由
    ScenesController = require('./ScenesController'), //引用场景路由
    PrinksController = require('./PrinksController'), //引用化妆路由
    PhotographersController = require('./PhotographersController'), //引用摄影师路由
    ModelsController = require('./ModelsController'); //引用模特路由

// 实现路由的模块分离
var controller = function(app){
    homeController(app);
    userController(app);
    collocationsController(app);
    messageController(app);
    ScenesController(app);
    PrinksController(app);
    PhotographersController(app);
    ModelsController(app);
}


module.exports = controller;
