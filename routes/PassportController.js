var Users = require("../models/UsersModel"), // 引用用户模型
    crypto = require("crypto"), // 引用加密模块
    auth = require("../middleware/auth"); // 引用验证模块

// 自定义文件
var cssGroup = [
    "/css/passport.css"
];
var jsGroup = [
    "/layer/layer.js", //初始化上传组件
    "/js/particles.min.js",
    "/js/passport.js"
];

var passportController = function(router){

    router.all('/passport/register|login', auth.checkNotLogin);
    // 用户注册
    router.get('/passport/register', function(req, res, next){
        res.render('passport/register', {
            title : '72PX用户注册',
            action : 'register',
            cssGroup : cssGroup,
            jsGroup : jsGroup,
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        })
    });

    /*-------------- 用户注册处理 ----------------*/
    router.post('/passport/register', function(req, res){
        var name = req.body.userName,
            password = req.body.userPwd,
            userPwdRepeat = req.body.userPwdRepeat;
        if(password != userPwdRepeat){
            req.flash('错误',"两次密码输入不一致");
            return res.redirect("/passport/register"); //返回注册页
        }
        // 生成密码的MD5值
        var md5 = crypto.createHash('md5');
        password = md5.update(password).digest('hex');

        // 新用户
        var newUser = new Users({
            name : name,
            password : password,
            email : '48838965@qq.com'
        });

        // 验证用户名是否被注册

        Users.getUserByName(newUser.name, function(err ,user){
            if(err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            if(user) {
                req.flash('error', '用户已存在!');
                return res.redirect('/passport/register');//返回注册页
            }
            //如果不存在则新增用户
            newUser.save(function (err, user) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/register');//注册失败返回主册页
                }
                req.session.user = user;//用户信息存入 session
                req.flash('success', '注册成功!');
                res.redirect('/message');//注册成功后返回主页
            });
        });

    });

    // 用户登陆
    router.get('/passport/login', function (req, res, next) {
        res.render('passport/login', {
            title : '72PX用户登录',
            action : 'login',
            cssGroup : cssGroup,
            jsGroup : jsGroup,
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        })
    });

    /*-------------- 用户登录处理 ----------------*/
    router.post('/passport/login', function(req, res){
        var name = req.body.userName,
            password = req.body.userPwd;
        var md5 = crypto.createHash("md5");
        password = md5.update(password).digest('hex');
        Users.getUserByName(name, function(err ,user) {
            if (!user) {
                req.flash('error', '用户不存在!');
                return res.redirect('/passport/login');//用户不存在则跳转到登录页
            }
            //检查密码是不是一致
            if(user.password != password){
                req.flash('error', '密码错误!');
                return res.redirect('/passport/login');//密码错误则跳转到登录页
            }
            //用户名密码都匹配后，将用户信息存入 session
            req.session.user = user;
            req.flash('success', '登陆成功!');
            res.redirect('/message');//登陆成功后跳转到主页
        });
    });

    // 用户退出
    router.get('/passport/logout', auth.checkLogin);
    router.get('/passport/logout', function (req, res) {
        req.session.user = null;
        req.flash('success', '退出成功!');
        res.redirect('/message');//退出成功后跳转到主页
    });
}

module.exports = passportController;
