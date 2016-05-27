var Photographers = require("../models/PhotographersModel"); // 引用摄影师模型
var multerUtil  = require('../middleware/multerUtil'); //文件上传

// 自定义文件
var cssGroup = [];
var jsGroup = [];


var PhotographersController = function(router){
  var upload = new multerUtil('../data/attachment/gallery'); //设置上传目录
  /* 摄影应用*/
  router.get('/photographers', function(req, res, next) {
    var photographers = new  Photographers();
    photographers.getAll(function(err, photographer){
      res.render('photographer/index', {
        title: '72PX摄影',
        action : 'photographers',
        photographers : photographer
      });
    });
  });
  /* 新增摄影*/
  router.get('/photographers/create', function(req, res, next) {
    var photographers = new  Photographers();
    photographers.getAll(function(err, photographer){
      res.render('photographer/create', {
        title: '72PX摄影',
        action : 'photographers',
        cssGroup : cssGroup,
        jsGroup : jsGroup,
        photographers : photographer
      });
    });
  });

  //var upload = multer({ dest : catalog });
  var cpUpload = upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  router.post('/photographers/create', cpUpload, function(req, res, next){
    var name = req.body.name;
    var desc = req.body.desc;
    var style = req.body.style;
    var tags = req.body.tags;
    var camera = req.body.camera;
    var shot = req.body.shot;
    console.log(req.files['cover'][0]);

   // console.log(req.files['cover'][0]);
   // console.log( req.files['gallery']);
    //res.redirect("/photographers/create");
  });

  function  getCatalog(catalog){

    return storage;
  }

}


module.exports = PhotographersController;
