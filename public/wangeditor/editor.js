/**
 * Created by hujj on 2016/5/25.
 */
var editor = new wangEditor('worksContent');
// 为当前的editor配置密钥
editor.config.mapAk = '8ft7ZgDwrktuzixGhGLajPZAfmiVdTm1';  // 此处换成自己申请的密钥
// 自定义菜单
editor.config.menus = [
    //'source',
    '|',
    'bold',
    'underline',
    'italic',
    'strikethrough',
    'eraser',
    'forecolor',
    'bgcolor',
    '|',
    'quote',
    'fontfamily',
    'fontsize',
    'head',
    'unorderlist',
    'orderlist',
    'alignleft',
    'aligncenter',
    'alignright',
    '|',
    //'link',
    //'unlink',
    'table',
    //'emotion',
    '|',
    //'img',
    //'video',
    'location',
    //'insertcode',
    '|',
    'undo',
    'redo',
    //'fullscreen'
];
editor.create();


// 获取编辑区域的html
//var html = editor.$txt.html();
// 获取编辑区域的纯文本
//var text = editor.$txt.text();
// 获取编辑区域的所有图片
//var imgs = editor.$txt.find('img');
// 获取格式化后的纯文本
//var formatText = editor.$txt.formatText();
// 追加内容
//editor.$txt.append('<p>新内容</p>');