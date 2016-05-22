var Users = require("../models/UsersModel.js"); // 引用用户模型

var usersController = function(router){
  router.get('/user', function(req, res, next) {
    res.render('user', {
      title: '72PX用户',
      action : 'user',
      users : user
    });
  });
}

module.exports = usersController;
