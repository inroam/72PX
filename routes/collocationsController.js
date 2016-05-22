var express = require('express');
var router = express.Router();
var Collocations = require("../models/CollocationsModel.js"); // 引用搭配模型

var collocationsController = function(router){
  /* GET collocations listing. */
  router.get('/collocations', function(req, res, next) {
    var collocations = new  Collocations();
    collocations.getAll(function(err,collocations){
      //查询约拍场景
      res.render('collocations', {
        title: '72PX搭配',
        action : 'collocations',
        collocations : collocations
      });
    });
  });
}


module.exports = collocationsController;
