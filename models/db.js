/**
 * Created by hujj on 2016/5/20.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var config = require('../data/config'); //引用数据库配置

var db = mongoose.createConnection(config.host,config.database); //创建一个数据库连接
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
    //一次打开记录
});

module.exports = db;