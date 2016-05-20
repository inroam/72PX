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

// 定义一个方法
CollocationsSchema.methods.getAll = function(){
    Collocations.find(function(err,collocations){
        return collocations;
    });
}

// 将搭配Schema 发布为 搭配模型
var Collocations = db.model("collocations",CollocationsSchema);

module.exports = Collocations;

