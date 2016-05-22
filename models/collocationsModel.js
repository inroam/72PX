/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架

// 定义一个搭配Schema
var CollocationsSchema = new mongoose.Schema({
    name : {
        type:'String', // 数据类型
        requires : true // 不能为空
    },
    hits : Number,
    cover : {
        type:'String', // 数据类型
        requires : true // 不能为空
    },
    imageList : [String],
    desc : String,
    style : String,
    tags : [String],
    mark : String
});

// 获取集合所有数据 如果不提供回调函数，所有这些方法都返回 Query 对象，它们都可以被再次修改（比如增加选项、键等），直到调用 exec 方法
CollocationsSchema.methods.getAll = function(callback){
    return this.model("collocations").find(callback);
}
// 获取集合中的一个数据  静态方法 可直接调用
CollocationsSchema.statics.getOne = function(callback){
    this.findOne(callback);
}

// 将搭配Schema 发布为 搭配模型
var Collocations = db.model("collocations",CollocationsSchema);


module.exports = Collocations;

