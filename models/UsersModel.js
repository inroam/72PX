/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架

// 定义一个UserSchema
var UsersSchema = new mongoose.Schema({
    name : {
        type:'String', // 数据类型
        requires : true // 不能为空
    },
    password :  {
        type:'String', // 数据类型
        requires : true // 不能为空
    },
    email : 'String'

});

// 将72PX配置SSchema 发布为 配置模型
var Users = db.model("users",UsersSchema);


module.exports = Users;

