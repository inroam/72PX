var messageController = function(router){
  /* GET home page. */
  router.get('/message', function(req, res, next) {
    res.render('message', {
      title : '72PX',
      action : 'index',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
}

module.exports = messageController;
