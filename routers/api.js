/**
 * Created by Quangezai on 2018/2/5.
 * api路由
 */
var express = require('express');
var router = express.Router();

// 登录的API
router.post('/user/login', function (req, res, next) {
    console.log(req.body);
});

module.exports = router;

