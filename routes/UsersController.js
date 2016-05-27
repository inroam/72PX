var Users = require("../models/UsersModel"), // 引用用户模型
    Works = require("../models/WorksModel");

var cssGroup = [
  "/css/users.css"
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
