/**
 * Created by hujj on 2016/5/17.
 */
var ypcjObj = require('./ypcjData.json');

/* 约拍场景 对象*/
function Ypcj(ypcj){
    this.id = ypcj.id;
    this.name = ypcj.name;
    this.cover = ypcj.cover;
    this.mark = ypcj.mark;
    this.imageList = ypcj.imageList;
}

module.exports = Ypcj;

// 存储约拍场景
Ypcj.prototype.save = function(callback){

};

// 读取约拍场景
Ypcj.prototype.getAll = function(callback){
    ypcjObj.toArray(function(err, ypcj){
        if(err){
            return callback(err);
        }
       callback(null,ypcj);
    })
};


// 读取详细约拍场景
Ypcj.prototype.getOne = function(id, callback){

};