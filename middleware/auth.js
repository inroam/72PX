//验证用户
var auth = {
    checkLogin : function(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            return res.redirect('/passport/login');
        }
        next();
    },
    checkNotLogin : function(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            return res.redirect('back');//返回之前的页面
        }
        next();
    }
};

/**
 * 需要登录
 */
/*
exports.userRequired = function (req, res, next) {
    if (!req.session || !req.session.user || !req.session.user._id) {
        return res.status(403).send('forbidden!');
    }
    next();
};
*/

module.exports = auth;
