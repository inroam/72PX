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

// 获取集合所有数据 必须加上参数
CollocationsSchema.methods.getAll = function(cb){
    return this.model("collocations").find(cb);
}
// 获取集合中的一个数据  静态方法 可直接调用
CollocationsSchema.statics.getOne = function(cb){
    this.find(cb).limit(1);
}

// 将搭配Schema 发布为 搭配模型
var Collocations = db.model("collocations",CollocationsSchema);


module.exports = Collocations;

