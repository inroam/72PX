var Users = require("../models/UsersModel"), // 引用用户模型
    Works = require("../models/WorksModel"),
    auth = require("../middleware/auth"); // 引用验证模块

var cssGroup = [
    "/css/users.css",
    "/webuploader/webuploader.css"
];

var jsGroup = [
    "/webuploader/webuploader.nolog.min.js", //上传组件
    "/user.js" //上传组件
];

var usersController = function(router){
    var users = new Users();
    var works = new Works();

    router.get('/users', function(req, res, next) {
        res.render('user', {
          title: '72PX用户',
          action : 'user',
          users : user
        });
    });

    //个人设置
    router.get('/users/setting', auth.checkLogin)
    router.get('/users/setting', function(req, res, next) {
        var userId = req.session.user._id;
        users.getUserById(userId, function(err, user){
            res.render('users/setting', {
                title: '个人设置',
                action : 'user',
                cssGroup : cssGroup,
                jsGroup : jsGroup,
                users : user
            });
        });
    });

    //个人主页
    router.get('/users/:id', function(req, res, next){
        var id = req.params.id;
        if(!id) return res.redirect("/");
       users.getUserById(id, function(err, user){
           works.getWorksByUserId(id, function(err, work){
               console.log(user);
               res.render('users/detail', {
                   title: '72PX用户',
                   action : 'users',
                   cssGroup : cssGroup,
                   user : user,
                   works : work
               });
           });
       });
    });

}

module.exports = usersController;
