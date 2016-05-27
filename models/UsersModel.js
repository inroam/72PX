/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架
var Schema = mongoose.Schema;
// 定义一个UserSchema
var UsersSchema = new Schema({
    name : {
        type:String, // 数据类型
        requires : true // 不能为空
    },
    password :  {
        type:String, // 数据类型
        requires : true // 不能为空
    },
    email : String,
    desc : String,
    follow : [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    fans : [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
});

// 根据用户ID 获取用户的作品

// 读取用户
UsersSchema.methods.getUserById = function(id, callback){
   return this.model("users").findOne({_id : id} ,callback);
}


// 读取用户
UsersSchema.statics.getUserByName = function(name, callback){
    this.findOne({name : name}, callback);
}

// 将72PX配置SSchema 发布为 配置模型
var Users = db.model("users",UsersSchema);


module.exports = Users;

