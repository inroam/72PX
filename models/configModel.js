/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架

// 定义一个72PX配置Schema
var ConfigSchema = new mongoose.Schema({
    name : {
        type:'String', // 数据类型
        requires : true // 不能为空
    },
    imageList : [String],
    desc : String,
    style : String,
    mark : String
});

// 将72PX配置SSchema 发布为 配置模型
var Config = db.model("config",ConfigSchema);


module.exports = Config;

