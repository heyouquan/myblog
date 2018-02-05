/**
 * Created by Quangezai on 2018/2/5.
 * 后台管理页面路由
 */
var express = require('express');
var router = express.Router();

router.get('/user', function (req, res, next) {
    res.send('User');
});

module.exports = router;



