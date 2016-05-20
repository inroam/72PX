var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('ypcj', {
    title : '72PX',
    action : 'index',
    homes : 'homes',
    bg :  bgIndex
  });
});

module.exports = router;
