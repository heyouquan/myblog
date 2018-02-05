/**
 * Created by Quangezai on 2018/2/5.
 * 前台页面路由
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: '首页', name: 'yoqan'});
});

module.exports = router;

