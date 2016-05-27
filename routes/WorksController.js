var Works = require("../models/WorksModel"), // 引用摄影师模型
	Gallery = require("../models/GalleryModel"), // 引用相册模型
	multerUtil  = require('../middleware/multerUtil'), //文件上传
	fs = require("fs"), //文件操作
	moment = require('moment'); //日期格式化

// 自定义文件
var cssGroup = [
  "/wangeditor/wangeditor.min.css",
  "/webuploader/webuploader.css",
  "/webuploader/upload.css",
  "/css/works.css"
];
var jsGroup = [
  "/layer/layer.js", //初始化上传组件
  "/wangeditor/wangEditor.min.js", //富文本组件
  "/wangeditor/editor.js", //初始化富文本
  "/webuploader/webuploader.nolog.min.js", //上传组件
  "/webuploader/upload.js", //初始化上传组件
  "/js/works.js"
];

var galleryIds = []; //需要保存的图片ID集合

var folderName = moment().format("YYYYMM");
var catelog = "../data/attachment/" + folderName; //附件目录
var folderExists = fs.existsSync(catelog);
if(!folderExists) fs.mkdirSync(catelog);

var upload = new multerUtil(catelog); //设置上传目录

var WorksController = function(router){
	var works = new  Works();
	/* 作品首页 */
	router.get('/works', function(req, res, next) {
		works.getAll(function(err, work){
			res.render('works/', {
				title: '72PX摄影',
				action : 'works',
				cssGroup : ["/css/works.css"],
				jsGroup : ["/js/works.js"],
				works : work
			});
		});
	});

	/* 作品详细页 */
	router.get('/works/detail/:id', function(req, res, next) {
		var id = req.params.id;
		if(id){
			Works.getOne(id, function(err, work){
				if(!work) return res.redirect('/works');
				res.render('works/detail', {
					title: '72PX摄影',
					action : 'works',
					cssGroup : ["/css/works.css"],
					jsGroup : ["/js/works.js"],
					works : work
				});
			});
		}else{
			return res.redirect('/works');
		}
	});

	/* 投稿权限控制 */
	router.all('/works/create', function(req, res, next){
		if(req.session.user){
			next();
		}else{
			return res.redirect('/passport/login');
		}
	});

	/* 作品申请 */
	router.route('/works/create')
		.get(function(req, res, next) {
			works.getAll(function(err, work){
				res.render('works/create', {
					title: '72PX摄影',
					action : 'works',
					cssGroup : cssGroup,
					jsGroup : jsGroup,
					works : work
				});
			});
		})
		.post(function(req, res, next){
			var title = req.body.title;
			var content = req.body.worksContent;
			var userId = req.session.user._id; //获取用户ID
			var newWorks = new Works({
				title : title,
				userId : userId,
				content : content,
				galleryIds : galleryIds,
			});
			newWorks.save(function(err){
				if (err) return handleError(err);
			});
			res.redirect('/works');
		});

	/* 作品更新 */
	router.route('/works/update')
	.get(function(req, res, next) {
		works.getAll(function(err, work){
			res.render('works/create', {
				title: '72PX摄影',
				action : 'works',
				cssGroup : cssGroup,
				jsGroup : jsGroup,
				works : work
			});
		});
	})
	.put(function(req, res, next){
		var title = req.body.title;
		var content = req.body.worksContent;
		var newWorks = new Works({
			title : title,
			content : content,
			galleryIds : galleryIds,
		});
		newWorks.save(function(err){
			if (err) return handleError(err);
		});
		res.redirect('/works');
	});

	/* 作品删除 */
	router.delete('/works/delete/:id', function(req, res){

	});

    /* 投稿图片上传 */
	//var cpUpload = upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
	var cpUpload = upload.fields([{ name: 'gallery', maxCount: 20 }]);
	router.post('/works/uploadGallery', cpUpload, function (req, res, next) {
		// console.log(req.files['cover'][0]);
		// console.log( req.files['gallery']);
		var file = req.files['gallery'][0];
		var status = 1;
		var newGallery = new Gallery({
			url :  folderName + "/" + file.filename, //图片路径
		});
		newGallery.save(function(err){
			if (err) return handleError(err);
			galleryIds.push(newGallery._id);
		});
		res.end();
	})


}


module.exports = WorksController;
