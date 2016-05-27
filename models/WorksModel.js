/**
 * Created by hujj on 2016/5/17.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = require('./db');    //引用mongoose ORM框架

var Schema = mongoose.Schema;

// 定义一个作品Schema
var WorksSchema = new Schema({
    title : {
        type: String, // 数据类型
        requires : true // 不能为空
    },
    hits : Number,
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    cover : 'String', // 数据类型
    galleryIds : [{
        type: Schema.Types.ObjectId,
        ref: 'gallery'
    }],
    desc : String,
    content : String,
    tags : [String],
    camera : String,
    shot : String,
    mark : String
});

// 获取集合所有数据 如果不提供回调函数，所有这些方法都返回 Query 对象，它们都可以被再次修改（比如增加选项、键等），直到调用 exec 方法
WorksSchema.methods.getAll = function(callback){
    // populate(path, [select], [model], [match], [options])
    /*path
    类型：String或Object。
　　String类型的时， 指定要填充的关联字段，要填充多个关联字段可以以空格分隔。
　　Object类型的时，就是把 populate 的参数封装到一个对象里。当然也可以是个数组。下面的例子中将会实现。

    select
    类型：Object或String，可选，指定填充 document 中的哪些字段。
　　Object类型的时，格式如:{name: 1, _id: 0},为0表示不填充，为1时表示填充。
　　String类型的时，格式如:"name -_id"，用空格分隔字段，在字段名前加上-表示不填充。详细语法介绍 query-select

    model
    类型：Model，可选，指定关联字段的 model，如果没有指定就会使用Schema的ref。

    match
    类型：Object，可选，指定附加的查询条件。

    options
    类型：Object，可选，指定附加的其他查询选项，如排序以及条数限制等等。*/
    return this.model("works").find(callback).populate("galleryIds",'url', null, {sort: {_id : 1}}); //倒序查出作品中的图片
}

/* 根据用户倒序查出作品  */
WorksSchema.methods.getWorksByUserId = function(userId, callback){
    return this.model("works").find({userId: userId},callback).populate("galleryIds",'url', null, {sort: {_id : 1}});
};

// 获取集合中的一个数据  静态方法 可直接调用
WorksSchema.statics.getOne = function(id, callback){
    this.findById({_id : id},callback).populate("galleryIds",'url');
}

// 将搭配Schema 发布为 作品模型
var Works = db.model("works",WorksSchema);


module.exports = Works;

