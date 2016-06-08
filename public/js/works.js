/**
 * Created by hujj on 2016/5/24.
 */

/* -----------------验证表单 --------------------*/
function checkWorks() {
	$("worksContent").val(editor.$txt.html());
	return true;
}

// 作品首页
var worksWaterFall = $("#worksWaterfall");
if(worksWaterFall.length > 0){
	worksWaterFall.waterfall({
		itemCls: 'item',
		colWidth: 400,
		gutterWidth: 30,
		gutterHeight: 30,
		//maxPage: 2,
		checkImagesLoaded: false,
		path: function(page) {
			var url = "/works/pages/" + page;
			return url;
		},
		//dataType: "jsonp",
		callbacks: {
			loadingStart: function($loading) {
				$loading.show();
				//console.log('loading', 'start');
			},
			loadingFinished: function($loading, isBeyondMaxPage) {
				if ( !isBeyondMaxPage ) {
					$loading.fadeOut();
					//console.log('loading finished');
				} else {
					//console.log('loading isBeyondMaxPage');
					$loading.remove();
				}
			},
			/*
			 * ajax请求出错误
			 * @param {String} xhr , "end" "error"
			 */
			loadingError: function($message, xhr) {
				//$message.html('Data load faild, please try again later.');
				$message.html('没有更多信息.');
			},

			/*
			 * 处理ajax返回数方法
			 * @param {String} data
			 * @param {String} dataType , "json", "jsonp", "html"
			 */
			renderData: function (data, dataType) {
				var tpl = "";
				console.log(data)
				if ( dataType === 'json' ||  dataType === 'jsonp'  ) { // json或jsonp格式
					if(data){
						;
						$.each(data.results, function(k,v)
						{
							tpl += "<li class='item'>";
							tpl += "<a href='/works/detail/" + v._id + "'  class='show' target='_blank'><img src='/" + v.galleryIds[0].url + "' width='400' /></a>";
							tpl += " </li>";
						});
					}
					return worksWaterFall.append(tpl);
				} else { // html格式

					return data;
				}
			}
		}
	});
}


