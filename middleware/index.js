var homeController = require('../routes/HomeController'), //引用首页路由
    userController = require('../routes/UsersController'), //引用用户路由
    collocationsController = require('../routes/CollocationsController'), //引用搭配路由
    messageController = require('../routes/MessageController'), //引用搭配路由
    ScenesController = require('../routes/ScenesController'), //引用场景路由
    PrinksController = require('../routes/PrinksController'), //引用化妆路由
    PhotographersController = require('../routes/PhotographersController'), //引用摄影师路由
    ModelsController = require('../routes/ModelsController'), //引用模特路由
    WorksController = require('../routes/WorksController'), //引用模特路由
    passportController = require('../routes/PassportController'); //引用通行证路由

// 实现路由的模块分离
var controller = function(app){
    // get session
    app.use(function (req, res, next) {
        res.locals.user = req.session.user || null;
        next();
    });
    homeController(app);
    userController(app);
    collocationsController(app);
    messageController(app);
    ScenesController(app);
    PrinksController(app);
    PhotographersController(app);
    ModelsController(app);
    WorksController(app);
    passportController(app);
}


module.exports = controller;
