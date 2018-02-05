/**
 * Created by Quangezai on 2018/2/5.
 * api路由
 */
var express = require('express');
var router = express.Router();

router.get('/api', function (req, res, next) {
    res.send('api');
});

module.exports = router;

