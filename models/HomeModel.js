/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架

// 定义一个HomeSchema
var HomeSchema = new mongoose.Schema({
    name : {
        type: String, // 数据类型
        requires : true // 不能为空
    },
    imageList : [String],
    desc : String,
    style : String,
    mark : String
});

// 将72PX配置SSchema 发布为 配置模型
var Home = db.model("home",HomeSchema);


module.exports = Home;

